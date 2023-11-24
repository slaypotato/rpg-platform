import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CampaignService } from './campaign.service';
import CampaignDto from './dtos/campaign.dto';

@Controller('campaign')
@ApiTags('Campaign')
export class CampaignController {
  constructor(private readonly service: CampaignService) {}

  @Get('all')
  @ApiResponse({
    status: 200,
    description: 'Get All Campaign Information',
  })
  async getAllCampaign(): Promise<any> {
    return await this.service.getAllCampaigns();
  }

  @Get('user')
  @ApiResponse({
    status: 200,
    description: 'Get All Campaign Information from a user',
  })
  @ApiQuery({
    name: 'userId',
    description: 'User ID',
    type: String,
  })
  async getAllCampaignByUser(
    @Query('userId') userId: string,
  ): Promise<CampaignDto[]> {
    console.log(userId);
    return await this.service.getAllCampaignsByUser(userId);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get a Campaign Information',
  })
  @ApiParam({
    name: 'id',
    description: 'Campaign ID',
    type: String,
  })
  async getCampaignById(@Param('id') campaignId: string): Promise<CampaignDto> {
    return this.service.getCampaignById(campaignId);
  }

  @Post('new')
  @ApiResponse({
    status: 201,
    description: 'Create a new Campaign',
  })
  @ApiQuery({
    name: 'userId',
    description: 'User ID',
    type: String,
  })
  @ApiBody({
    type: CampaignDto,
  })
  async createNewCampaign(
    @Body() campaign: CampaignDto,
    @Query('userId') userId: string,
  ): Promise<CampaignDto> {
    return await this.service.createNewCampaign(campaign, userId);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Update Campaign Information',
  })
  @ApiParam({
    name: 'id',
    description: 'Campaign ID',
    type: String,
  })
  @ApiBody({
    type: CampaignDto,
  })
  async updateCampaign(
    @Param('id') campaignId: string,
    @Body() campaign: CampaignDto,
  ): Promise<any> {
    return await this.service.updateCampaign(campaignId, campaign);
  }

  @Put(':id/newPlayer')
  @ApiResponse({
    status: 200,
    description: 'Add New Player',
  })
  @ApiParam({
    name: 'id',
    description: 'Campaign ID',
    type: String,
  })
  @ApiBody({
    description: 'List of Players IDs',
    type: String,
    isArray: true,
  })
  async addNewPlayer(
    @Param('id') campaignId: string,
    @Body('players') newPlayers: string[],
  ): Promise<any> {
    return await this.service.addNewPlayer(campaignId, newPlayers);
  }

  @Delete(':id/remove/:player')
  @ApiResponse({
    status: 200,
    description: 'Remove Player',
  })
  @ApiParam({
    name: 'id',
    description: 'Campaign ID',
    type: String,
  })
  @ApiParam({
    name: 'player',
    description: 'Player ID',
    type: String,
  })
  async removePlayer(
    @Param('id') campaignId: string,
    @Param('player') playerId: string,
  ): Promise<any> {
    return await this.service.removePlayer(campaignId, playerId);
  }
}
