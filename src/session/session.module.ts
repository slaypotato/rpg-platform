import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { DatabaseModule } from 'src/database/database.module';
import { sessionProviders } from './session.providers';
import { CampaignModule } from 'src/campaign/campaign.module';
import { SessionCommandsController } from './sessions-commands.controller';
import { SessionCommandsService } from './sessions-commands.service';

@Module({
  imports: [DatabaseModule, CampaignModule],
  controllers: [SessionController, SessionCommandsController],
  providers: [...sessionProviders, SessionService, SessionCommandsService],
})
export class SessionModule {}

//Session handle all active game sessions
