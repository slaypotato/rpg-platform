import { ApiProperty } from '@nestjs/swagger';

export default class SessionDto {
  @ApiProperty()
  sessionId: string;

  @ApiProperty()
  campaignId: string;

  @ApiProperty()
  sessionName: string;

  @ApiProperty()
  sessionDescription: string;

  @ApiProperty()
  previousSession: string;

  @ApiProperty()
  sessionNumber: number;

  @ApiProperty({ isArray: true })
  sessionEvents: string[];
}
