import { EnumDice } from '../../session/dtos/dice.dto';

interface DicePlusBonus {
  dice: EnumDice;
  bonus: number;
}

interface Equipment {
  roll1: string;
  roll2: string;
  damage: DicePlusBonus;
  damageType: string;
}

interface CharClass {
  name: string;
  level: number;
  freeBenefits: string;
  skills: string[];
}

interface Magic {
  name: string;
  costMP: number;
  target: string;
  duration: string;
}

interface Ritual {
  name: string;
  discipline: string;
  clockSize: number;
}

export interface FabulaUltimaCharSheet {
  traits: {
    identity: string;
    theme: string;
    origin: string;
  };
  bonds: [
    {
      name: string;
      admiration: boolean;
      inferiority: boolean;
      loyalty: boolean;
      mistrust: boolean;
      affection: boolean;
      hatred: boolean;
    },
  ];
  fabulaPoints: number;
  experience: number;
  attributes: {
    Dexterity: EnumDice;
    Insight: EnumDice;
    Might: EnumDice;
    Willpower: EnumDice;
  };
  statusEffects: {
    slow: boolean;
    dazed: boolean;
    enraged: boolean;
    weak: boolean;
    shaken: boolean;
    poisoned: boolean;
  };
  Modifiers: {
    initiative: number;
    defense: DicePlusBonus;
    magicDeffense: DicePlusBonus;
  };
  Equiments: {
    martialMeeleWeapon: boolean;
    martialRangedWeapon: boolean;
    martialArmor: boolean;
    martialShield: boolean;
    accessory: Equipment;
    rightHand: Equipment;
    leftHand: Equipment;
    armor: Equipment;
  };
  classes: CharClass[];
  money: number;
  backpack: string;
  notes: string;
  magic: Magic[];
  arcana: Magic[];
  rituals: Ritual[];
}
