import mongoose from 'mongoose';
import { env } from './env.js';

const READY_STATES = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting',
};

export const getDatabaseStatus = () =>
  READY_STATES[mongoose.connection.readyState] ?? 'unknown';

export async function connectDB() {
  try {
    await mongoose.connect(env.mongodbUri, { serverSelectionTimeoutMS: 5000 });
    console.log(`MongoDB connected (${mongoose.connection.name})`);
  } catch (error) {
    // The API stays up so /api/health can report the database state.
    // Auth routes (Step 2) will depend on this connection.
    console.error(`MongoDB connection failed: ${error.message}`);
  }
}

export async function disconnectDB() {
  await mongoose.disconnect();
}
