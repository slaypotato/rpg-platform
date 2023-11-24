import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import SessionDto from './dtos/session.dto';
import SessionCreatedDto from './dtos/session-create.dto';
import { CampaignService } from 'src/campaign/campaign.service';

@Injectable()
export class SessionService {
  constructor(
    @Inject('SESSION_MODEL')
    private sessionModel: Model<SessionCreatedDto>,
    private readonly campaign: CampaignService,
  ) {}

  async getSessionById(id: string): Promise<SessionDto> {
    return await this.sessionModel.findOne({ sessionId: id });
  }

  async getSessionsByCampaign(campaignId: string): Promise<SessionDto[]> {
    return await this.sessionModel.find({ campaignId: campaignId }).exec();
  }

  async getLastSessionOfCampaign(campaignId: string): Promise<SessionDto> {
    const sessions = await this.getSessionsByCampaign(campaignId);
    return sessions.reduce((accumulator, session) => {
      return accumulator.sessionNumber > session.sessionNumber
        ? accumulator
        : session;
    }, sessions[0]);
  }

  async createNewSession(
    session: SessionCreatedDto,
  ): Promise<SessionCreatedDto> {
    const previous = await this.getLastSessionOfCampaign(session.campaignId);
    session.sessionId = uuidv4();
    session.previousSession = previous ? previous.sessionId : '';
    session.sessionNumber = previous ? previous.sessionNumber + 1 : 1;
    const createdSession = new this.sessionModel(session);
    return createdSession.save();
  }

  async getAllSession(): Promise<SessionCreatedDto[]> {
    return await this.sessionModel.find().exec();
  }
}

/*
  sessionId: string;
  campaignId: string;
  sessionName: string;
  sessionDescription: string;
  previousSession: string;
  sessionNumber: number;
  sessionEvents: string[];
*/
