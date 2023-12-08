import { ApiProperty } from '@nestjs/swagger';

export class CharacterDto {
  @ApiProperty()
  characterId: string;

  @ApiProperty()
  campaignId: string;

  @ApiProperty()
  playerId: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  characterSheetTemplate: string;

  @ApiProperty()
  currentValues: any;

  @ApiProperty()
  maxValues: any;
}

export interface CreateCharacterInterface {
  characterId: string;
  campaignId: string;
  playerId: string;
  active: boolean;
  name: string;
  characterSheetTemplate: string;
  currentValues: any;
  maxValues: any;
}
