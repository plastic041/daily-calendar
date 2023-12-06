import type { Dayjs } from "dayjs";

export type CalendarEvent = {
  date: Dayjs;
  start: Dayjs;
  end: Dayjs;
  title: string;
  id: string;
};
