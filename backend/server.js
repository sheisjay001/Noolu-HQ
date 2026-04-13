import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection, query } from './db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Check users table on startup
const checkUsersTable = async () => {
  try {
    const tables = await query(`
      SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'users'
    `, [process.env.DB_NAME]);
    
    if (tables.length > 0) {
      console.log('✅ Users table exists');
    } else {
      console.log('⚠️ Users table does not exist. Run setup endpoint to create it.');
      console.log('   POST http://localhost:3001/api/setup/create-users-table');
    }
  } catch (error) {
    console.error('❌ Failed to check users table:', error.message);
  }
};

// Setup endpoint (requires admin credentials in production)
app.post('/api/setup/create-users-table', async (req, res) => {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    res.json({ success: true, message: 'Users table created' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Auth routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', async (req, res) => {
  const isConnected = await testConnection();
  res.json({
    status: isConnected ? 'healthy' : 'unhealthy',
    database: isConnected ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// Execute custom query (POST for safety)
app.post('/api/query', async (req, res) => {
  try {
    const { sql, params = [] } = req.body;
    
    // Only allow SELECT statements for security
    if (!sql.trim().toLowerCase().startsWith('select')) {
      return res.status(403).json({ error: 'Only SELECT queries are allowed' });
    }
    
    const results = await query(sql, params);
    res.json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get tables in the database
app.get('/api/tables', async (req, res) => {
  try {
    const results = await query('SHOW TABLES');
    res.json({ success: true, tables: results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Generic table data endpoint
app.get('/api/data/:table', async (req, res) => {
  try {
    const { table } = req.params;
    const { limit = 100, offset = 0 } = req.query;
    
    // Prevent SQL injection by validating table name
    const sanitizedTable = table.replace(/[^a-zA-Z0-9_]/g, '');
    
    const results = await query(
      `SELECT * FROM \`${sanitizedTable}\` LIMIT ? OFFSET ?`,
      [parseInt(limit), parseInt(offset)]
    );
    res.json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server - bind to 0.0.0.0 to accept connections from other devices
app.listen(PORT, '0.0.0.0', async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📱 For mobile access, use your computer's IP (e.g., http://192.168.x.x:${PORT})`);
  await testConnection();
  await checkUsersTable();
});
