import 'dotenv/config';

const parseOrigins = (value) =>
  value
    .split(',')
    .map((origin) => origin.trim().replace(/\/$/, ''))
    .filter(Boolean);

export const env = Object.freeze({
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT) || 5001,
  clientOrigins: parseOrigins(process.env.CLIENT_URL ?? 'http://localhost:5173'),
  mongodbUri:
    process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/ai-agent-platform',
});

export const isProduction = env.nodeEnv === 'production';
