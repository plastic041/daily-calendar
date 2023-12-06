import { calendarEventsAtom } from "@/components/daily-calendar/atom.ts";
import { useAtom } from "jotai";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

function getDayjsRange(start: Dayjs, end: Dayjs, unit: "day" | "hour") {
  const range: Dayjs[] = [];
  let current = start;
  while (current.isBefore(end) || current.isSame(end)) {
    range.push(current);
    current = current.add(1, unit);
  }
  return range;
}

export function DailyCalendar() {
  const [calendarEvents] = useAtom(calendarEventsAtom);
  const day = dayjs("2022-06-16").startOf("day");
  const start = day.add(8, "hour");
  const end = day.add(24, "hour");
  const hours = getDayjsRange(start, end, "hour");

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold">{start.format("YYYY-MM-DD")}</h2>

      {/* Starts drawing event when the empty space is clicked */}
      <ul className="flex flex-col gap-2 mt-8 border-black border-4 py-2 px-4 rounded-4">
        {hours.map((hour) => (
          <li
            key={hour.format("HH:mm")}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              calendarEvents.addEvent({
                start: hour,
                end: hour.add(1, "hour"),
                title: "New Event",
              });
            }}
          >
            <div className="w-16 text-right">{hour.format("HH:mm")}</div>
            <div className="flex-1 h-4 bg-gray-100"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
