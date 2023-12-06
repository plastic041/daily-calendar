import { atom } from "jotai";
import type { CalendarEvent } from "./type.ts";
import dayjs from "dayjs";

export const calendarEventsAtom = atom<CalendarEvent[]>([
  {
    date: dayjs("2020-06-16"),
    from: dayjs("2020-06-16 09:00"),
    to: dayjs("2020-06-16 10:00"),
    title: "까미 생일",
  },
]);
