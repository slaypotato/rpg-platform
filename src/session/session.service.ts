import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import SessionDto from './dtos/session.dto';
import SessionCreatedDto from './dtos/session-create.dto';

@Injectable()
export class SessionService {
  constructor(
    @Inject('SESSION_MODEL')
    private sessionModel: Model<SessionCreatedDto>,
  ) {}

  async getSessionById(id: string): Promise<SessionDto> {
    return await this.sessionModel.findOne({ sessionId: id });
  }

  async createNewSession(
    session: SessionCreatedDto,
  ): Promise<SessionCreatedDto> {
    console.log(session);
    session.sessionId = uuidv4();
    session.sessionToken = uuidv4();
    session.previousSession = Date.now().toString();
    const createdSession = new this.sessionModel(session);
    return createdSession.save();
  }

  async getAllSession(): Promise<SessionCreatedDto[]> {
    return await this.sessionModel.find().exec();
  }

  async updateSessionToken(id: string): Promise<any> {
    return await this.sessionModel.findOneAndUpdate(
      { sessionId: id },
      {
        $set: {
          previousSession: Date.now().toString(),
          sessionToken: uuidv4(),
        },
      },
    );
  }
}
