import * as mongoose from 'mongoose';

export const SessionSchema = new mongoose.Schema({
  sessionId: String,
  sessionName: String,
  sessionToken: String,
  sessionDescription: String,
  sessionType: Number,
  previousSession: String,
});
