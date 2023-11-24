import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { DatabaseModule } from 'src/database/database.module';
import { sessionProviders } from './session.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SessionController],
  providers: [...sessionProviders, SessionService],
})
export class SessionModule {}

//Session handle all active game sessions