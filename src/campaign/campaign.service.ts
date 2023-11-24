import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import CreateCampaignDto from './dtos/create-campaign.dto';
import CampaignDto from './dtos/campaign.dto';

@Injectable()
export class CampaignService {
  constructor(
    @Inject('CAMPAIGN_MODEL')
    private campaignModel: Model<CreateCampaignDto>,
  ) {}

  async createNewCampaign(
    campaign: CreateCampaignDto,
    ownerId: string,
  ): Promise<CreateCampaignDto> {
    campaign.campaignId = uuidv4();
    campaign.lastPlayed = Date.now().toString();
    campaign.players = [ownerId];
    const createdCampaign = new this.campaignModel(campaign);
    return await createdCampaign.save();
  }

  async getAllCampaigns(): Promise<CampaignDto[]> {
    return await this.campaignModel.find().exec();
  }

  async getAllCampaignsByUser(userId: string): Promise<CampaignDto[]> {
    return await this.campaignModel.find({ players: { $in: userId } }).exec();
  }

  async getCampaignById(campaignId: string): Promise<CampaignDto> {
    return await this.campaignModel.findOne({ campaignId: campaignId }).exec();
  }

  async updateCampaign(campaignId: string, campaign: CampaignDto) {
    await this.campaignModel
      .findOneAndUpdate(
        { campaignId: campaignId },
        { ...campaign, lastPlayed: Date.now().toString() },
      )
      .exec();
    return await this.getCampaignById(campaignId);
  }

  async addNewPlayer(campaignId: string, newPlayers: string[]) {
    const campaign = await this.getCampaignById(campaignId);
    const allPlayers = campaign.players.concat(newPlayers);
    return await this.campaignModel
      .findOneAndUpdate(
        { campaignId: campaignId },
        { $set: { lastPlayed: Date.now().toString(), players: allPlayers } },
        { new: true },
      )
      .exec();
  }

  async removePlayer(campaignId: string, playerId: string) {
    const campaign = await this.getCampaignById(campaignId);
    const newPlayerList = campaign.players.filter((player) => {
      return player !== playerId;
    });
    return await this.campaignModel
      .findOneAndUpdate(
        { campaignId: campaignId },
        { $set: { lastPlayed: Date.now().toString(), players: newPlayerList } },
        { new: true },
      )
      .exec();
  }

  async addNewMaps(campaignId: string, newMaps: string[]) {
    const campaign = await this.getCampaignById(campaignId);
    const allMaps = campaign.maps.concat(newMaps);
    return await this.campaignModel
      .findOneAndUpdate(
        { campaignId: campaignId },
        { $set: { lastPlayed: Date.now().toString(), maps: allMaps } },
        { new: true },
      )
      .exec();
  }
}

/*
  campaignId: String,
  campaignName: String,
  campaignDescription: String,
  campaignType: Number,
  lastPlayed: String,
  players: [String],
*/
