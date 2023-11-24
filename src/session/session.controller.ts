import { Controller, Get, Post, Param, Body, Patch } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SessionService } from './session.service';
import SessionDto from './dtos/session.dto';

@Controller('session')
@ApiTags('Session')
export class SessionController {
  constructor(private readonly service: SessionService) {}

  @ApiResponse({
    status: 201,
    description: 'Create a new Session',
  })
  @Post('new')
  async createNewSession(@Body() session: SessionDto): Promise<SessionDto> {
    console.log(`Creating new Session: ${session.sessionId}`);
    return await this.service.createNewSession(session);
  }

  @ApiResponse({
    status: 200,
    description: 'Get All Session Information',
  })
  @Get('all')
  async getSession(): Promise<SessionDto[]> {
    console.log(`Recovering all Session`);
    return await this.service.getAllSession();
  }

  @ApiResponse({
    status: 200,
    description: 'Current Session Information',
  })
  @Get(':id')
  async getSessionById(@Param('id') id: string): Promise<SessionDto> {
    console.log(`Updating Session ${id}`);
    return await this.service.getSessionById(id);
  }

  @ApiResponse({
    status: 200,
    description: 'Updating Session Information',
  })
  @Patch(':id')
  async updateSessionById(@Param('id') id: string): Promise<SessionDto> {
    console.log(`Updating Session ${id}`);
    return await this.service.updateSessionToken(id);
  }
}
