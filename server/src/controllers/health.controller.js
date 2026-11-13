import { getDatabaseStatus } from '../config/db.js';
import { env } from '../config/env.js';

export const getHealth = (req, res) => {
  res.status(200).json({
    status: 'ok',
    environment: env.nodeEnv,
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
    database: getDatabaseStatus(),
  });
};
