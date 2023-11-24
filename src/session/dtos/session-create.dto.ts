export default interface SessionCreatedDto {
  sessionId: string;
  sessionName: string;
  sessionToken: string;
  sessionDescription: string;
  sessionType: number;
  previousSession: string;
}
