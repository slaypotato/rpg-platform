import { Connection } from 'mongoose';
import { CharacterSchema } from './schemas/character.schema';

export const CharacterProviders = [
  {
    provide: 'CHARACTER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Character', CharacterSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
