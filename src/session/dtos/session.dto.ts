import { ApiProperty } from '@nestjs/swagger';

export default class SessionDto {
  @ApiProperty()
  sessionId: string;

  @ApiProperty()
  sessionName: string;

  @ApiProperty()
  sessionToken: string;

  @ApiProperty()
  sessionDescription: string;

  @ApiProperty()
  sessionType: number;

  @ApiProperty()
  previousSession: string;
}
