# Noolu HQ Backend

Express.js backend with TiDB Cloud connection.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Environment variables are already configured in `.env`

## Running

```bash
# Development (auto-reload)
npm run dev

# Production
npm start
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Check database connection |
| `/api/tables` | GET | List all tables |
| `/api/data/:table` | GET | Get data from a table |
| `/api/query` | POST | Execute SELECT query |

## Database Connection

Connected to TiDB Cloud at `gateway01.us-east-1.prod.aws.tidbcloud.com:4000`
