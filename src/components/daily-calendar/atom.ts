import { atom } from "jotai";
import dayjs from "dayjs";

export const calendarEventsAtom = atom([
  {
    start: dayjs("2020-06-16 09:00").toDate(),
    end: dayjs("2020-06-16 10:00").toDate(),
    title: "까미 생일",
    id: "1",
  },
]);
