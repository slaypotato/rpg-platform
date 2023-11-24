import * as mongoose from 'mongoose';

export const SessionSchema = new mongoose.Schema({
  sessionId: String,
  campaignId: String,
  sessionName: String,
  sessionDescription: String,
  previousSession: String,
  sessionNumber: Number,
  sessionEvents: [String],
});
