export default class Report {
  Month: string;
  Year: string;
  TimeString: string;
  Publications: number;
  ReturnVisits: number;
  VideosPlayed: number;
  StudiesConducted: number;

  constructor() {
    this.Month = "0";
    this.Year = "0";
    this.TimeString = '00:00';
    this.Publications = 0;
    this.ReturnVisits = 0;
    this.VideosPlayed = 0;
    this.StudiesConducted = 0;
  }
}