import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../db.js';
import { sendOTPEmail } from '../email.js';

const router = express.Router();

// In-memory OTP store (use Redis in production)
const otpStore = new Map();

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Request OTP for signup
router.post('/request-otp', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Check if user already exists
    const existingUsers = await query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const otp = generateOTP();
    otpStore.set(email, {
      otp,
      expires: Date.now() + 10 * 60 * 1000 // 10 minutes
    });

    const sent = await sendOTPEmail(email, otp);
    if (!sent) {
      return res.status(500).json({ error: 'Failed to send OTP email' });
    }

    res.json({ success: true, message: 'OTP sent to your email' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Complete signup with OTP
router.post('/signup', async (req, res) => {
  try {
    const { email, password, firstName, lastName, otp } = req.body;

    // Verify OTP
    const stored = otpStore.get(email);
    if (!stored || stored.otp !== otp || Date.now() > stored.expires) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    // Clear OTP
    otpStore.delete(email);

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user - using the sys database
    await query(
      'INSERT INTO users (email, password, first_name, last_name, created_at) VALUES (?, ?, ?, ?, NOW())',
      [email, hashedPassword, firstName, lastName]
    );

    // Generate JWT
    const users = await query('SELECT id, email, first_name, last_name FROM users WHERE email = ?', [email]);
    const user = users[0];

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      message: 'Account created successfully',
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check environment
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not set');
      return res.status(500).json({ error: 'Server configuration error: JWT_SECRET missing' });
    }

    // Find user
    const users = await query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = users[0];

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get current user (protected)
router.get('/me', authenticateToken, async (req, res) => {
  try {
    const users = await query(
      'SELECT id, email, first_name, last_name, created_at FROM users WHERE id = ?',
      [req.userId]
    );
    
    if (users.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = users[0];
    res.json({
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        createdAt: user.created_at
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Middleware to verify JWT
export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.userId = decoded.userId;
    req.email = decoded.email;
    next();
  });
}

export default router;
