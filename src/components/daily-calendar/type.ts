import type { Dayjs } from "dayjs";

export type CalendarEvent = {
  date: Dayjs;
  from: Dayjs;
  to: Dayjs;
  title: string;
};
