import { ApiProperty } from '@nestjs/swagger';

export default class CampaignDto {
  @ApiProperty()
  campaignId: string;

  @ApiProperty()
  campaignName: string;

  @ApiProperty()
  campaignDescription: string;

  @ApiProperty()
  campaignType: number;

  @ApiProperty()
  lastPlayed: string;

  @ApiProperty({ isArray: true, type: String })
  players: string[];

  @ApiProperty({ isArray: true, type: String })
  maps: string[];
}
