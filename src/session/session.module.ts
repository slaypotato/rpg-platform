import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { DatabaseModule } from 'src/database/database.module';
import { sessionProviders } from './session.providers';
import { CampaignModule } from 'src/campaign/campaign.module';

@Module({
  imports: [DatabaseModule, CampaignModule],
  controllers: [SessionController],
  providers: [...sessionProviders, SessionService],
})
export class SessionModule {}

//Session handle all active game sessions
