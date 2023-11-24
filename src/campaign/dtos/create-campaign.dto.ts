export default interface CreateCampaignDto {
  campaignId: string;
  campaignName: string;
  campaignDescription: string;
  campaignType: number;
  lastPlayed: string;
  players: string[];
  maps: string[];
}
