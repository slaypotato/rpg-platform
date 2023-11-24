export default interface SessionCreatedDto {
  sessionId: string;
  campaignId: string;
  sessionName: string;
  sessionDescription: string;
  previousSession: string;
  sessionNumber: number;
  sessionEvents: string[];
}
