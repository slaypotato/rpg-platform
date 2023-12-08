import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  characterId: String,
  campaignId: String,
  playerId: String,
  active: Boolean,
  name: String,
  characterSheetTemplate: String,
  currentValues: {},
  maxValues: {},
});
