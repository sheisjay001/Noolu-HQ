module.exports = {
  apps: [{
    name: 'noolu-backend',
    script: './server.js',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    // Auto-restart on crash
    autorestart: true,
    // Restart on memory limit (optional)
    max_memory_restart: '500M',
    // Logging
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    // Don't restart if crashing too fast
    min_uptime: '10s',
    max_restarts: 10,
    // Delay between restarts
    restart_delay: 3000,
    // Watch for file changes (optional - set to false for production)
    watch: false,
    // Ignore watch files
    ignore_watch: ['node_modules', 'logs', '.git']
  }]
};
