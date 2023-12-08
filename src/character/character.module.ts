import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { CharacterProviders } from './character.providers';
import { DatabaseModule } from 'src/database/database.module';
import { SessionModule } from 'src/session/session.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [CharacterController],
  providers: [...CharacterProviders, CharacterService],
  exports: [CharacterService],
})
export class CharacterModule {}
