export interface Task {
  id: string;
  name: string;
  description: string;
  color: string;
  startTime: string;
  endTime: string;
  dayOfWeek: number;
}

export interface WeekDay {
  date: Date;
  name: string;
  shortName: string;
  dayOfWeek: number;
}