import { Connection } from 'mongoose';
import { CampaignSchema } from './schemas/campaing.schema';

export const campaignProviders = [
  {
    provide: 'CAMPAIGN_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Campaign', CampaignSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
