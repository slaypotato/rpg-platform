import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { SessionModule } from './session/session.module';
import { DatabaseModule } from './database/database.module';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [
    SessionModule,
    ConfigModule.forRoot(),
    DatabaseModule,
    CampaignModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
