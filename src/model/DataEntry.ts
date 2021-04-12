import { Dayjs } from 'dayjs'

export default class DataEntry {
  // Dayjs: Dayjs;
  Date: Date;
  DayString: string;
  TimeString: string;
  Publications: number;
  ReturnVisits: number;
  VideosPlayed: number;
  StudiesConducted: number;
  Note: string;
  HoursServed: number;
  MinutesServed: number;

  constructor() {
    // this.Dayjs = new Dayjs(),
    this.Date = new Date;
    this.DayString = new Date().toISOString().substr(0, 10);
    this.TimeString = '00:00';
    this.Publications = 0;
    this.ReturnVisits = 0;
    this.VideosPlayed = 0;
    this.StudiesConducted = 0;
    this.Note = '';
    this.HoursServed = 0;
    this.MinutesServed = 0;
  }
}