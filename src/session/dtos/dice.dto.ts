import { ApiProperty } from '@nestjs/swagger';

export enum EnumDice {
  d4 = 4,
  d6 = 6,
  d8 = 8,
  d10 = 10,
  d12 = 12,
  d20 = 20,
  d100 = 100,
}

export class DiceDto {
  @ApiProperty({
    enum: EnumDice,
    example: 'd4',
    description:
      'should be d4 for a 4-sided dice, d6 for 6-sided dice, d8 for 8-sided dice,  d10 for 10-sided dice, d12 for 12-sided dice, d20 for a 20-sided dice and d100 for a 100-sided dice',
  })
  diceType: EnumDice;

  @ApiProperty()
  diceName?: string;
}

export interface DiceInterface {
  diceType: EnumDice;
  diceName?: string;
}
