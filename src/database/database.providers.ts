/* eslint-disable prettier/prettier */
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    imports: [ConfigModule],
    provide: 'DATABASE_CONNECTION',
    useFactory: async (config: ConfigService): Promise<typeof mongoose> => {
      const user = config.get<string>('MONGO_USER');
      const pass = config.get('MONGO_PASSWORD');
      const db = config.get('MONGO_DB');
      const host = config.get('MONGO_HOST');
      return mongoose.connect(`mongodb://${user}:${pass}@${host}/${db}`);
    },
    inject: [ConfigService]
  },
];
