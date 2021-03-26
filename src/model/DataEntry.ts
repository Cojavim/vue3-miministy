import dayjs, { Dayjs } from 'dayjs'

export default class DataEntry {
  Dayjs: Dayjs;
  Date: string;
  TimeServed: Number;
  Publications: Number;
  ReturnVisits: Number;
  VideosPlayed: Number;
  StudiesConducted: Number;
  Note: string;
  HoursServed: Number;
  MinutesServed: Number;

  constructor() {
    this.Dayjs = new Dayjs;
    this.Date = '';
    this.TimeServed = 0;
    this.Publications = 0;
    this.ReturnVisits = 0;
    this.VideosPlayed = 0;
    this.StudiesConducted = 0;
    this.Note = '';
    this.HoursServed = 0;
    this.MinutesServed = 0;
  }
}