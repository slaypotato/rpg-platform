import * as mongoose from 'mongoose';

export const CampaignSchema = new mongoose.Schema({
  campaignId: String,
  campaignName: String,
  campaignDescription: String,
  campaignType: Number,
  lastPlayed: String,
  players: [String],
  maps: [String],
});
