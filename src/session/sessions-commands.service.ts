import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { SessionService } from './session.service';
import SessionCreatedDto from './dtos/session-create.dto';
import { DiceDto, EnumDice } from './dtos/dice.dto';

@Injectable()
export class SessionCommandsService {
  constructor(
    @Inject('SESSION_MODEL')
    private sessionModel: Model<SessionCreatedDto>,
    private readonly session: SessionService,
  ) {}

  rollADice(size: number) {
    return ~~(Math.random() * size) + 1;
  }

  diceRolls(dices: DiceDto[]) {
    let diceRolls = 0;
    return dices.map((dice) => {
      const diceFaces = Number.parseInt(EnumDice[dice.diceType]);
      diceRolls += 1;
      const diceName = dice.diceName ? dice.diceName : `Dice${diceRolls}`;
      return {
        [diceName]: this.rollADice(diceFaces),
      };
    });
  }
}
