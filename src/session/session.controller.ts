import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SessionService } from './session.service';
import SessionDto from './dtos/session.dto';

@Controller('session')
@ApiTags('Session')
export class SessionController {
  constructor(private readonly service: SessionService) {}

  @Post('new')
  @ApiResponse({
    status: 201,
    description: 'Create a new Session',
  })
  async createNewSession(@Body() session: SessionDto): Promise<SessionDto> {
    console.log(`Creating new Session`);
    return await this.service.createNewSession(session);
  }

  @Get('all')
  @ApiResponse({
    status: 200,
    description: 'Get All Sessions Information',
  })
  async getSession(): Promise<SessionDto[]> {
    console.log(`Recovering all Session`);
    return await this.service.getAllSession();
  }

  @Get('last')
  @ApiResponse({
    status: 200,
    description: 'Current Session Information',
  })
  async getLastSesionByCampaignId(
    @Query('campaignid') id: string,
  ): Promise<SessionDto> {
    console.log(`Getting Sessions from Campaign ${id}`);
    return await this.service.getLastSessionOfCampaign(id);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Current Session Information',
  })
  async getSessionById(@Param('id') id: string): Promise<SessionDto> {
    console.log(`Getting info from Session ${id}`);
    return await this.service.getSessionById(id);
  }

  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'Current Session Information',
  })
  async getSessionByCampaignId(
    @Query('campaignid') id: string,
  ): Promise<SessionDto[]> {
    console.log(`Getting Sessions from Campaign ${id}`);
    return await this.service.getSessionsByCampaign(id);
  }
}
