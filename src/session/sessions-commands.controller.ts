import { Controller, Get, Body } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SessionCommandsService } from './sessions-commands.service';
import { DiceDto } from './dtos/dice.dto';

@Controller('session/command')
@ApiTags('Session')
export class SessionCommandsController {
  constructor(private readonly service: SessionCommandsService) {}

  @Get('diceRoll')
  @ApiResponse({ status: 200, description: 'Provide any rolled dices' })
  @ApiBody({ type: DiceDto, isArray: true })
  async GetDiceRoll(@Body() dices: DiceDto[]) {
    const result = await this.service.diceRolls(dices);
    console.log(result);
    return result;
  }
}
