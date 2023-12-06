import { calendarEventsAtom } from "@/components/daily-calendar/atom.ts";
import { useAtom } from "jotai";
import dayjs from "dayjs";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import koLocale from "@fullcalendar/core/locales/ko";

export function DailyCalendar() {
  const [calendarEvents, setCalendarEvents] = useAtom(calendarEventsAtom);

  return (
    <FullCalendar
      locale={koLocale}
      slotMinTime="07:00:00"
      slotMaxTime="24:00:00"
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridDay"
      initialDate="2020-06-16"
      allDaySlot={false}
      slotLabelFormat={{
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: false,
        hour12: false,
      }}
      editable
      events={calendarEvents}
      eventChange={(info) => {
        const { event } = info;
        const { id, start, end } = event;
        const newCalendarEvents = calendarEvents.map((calendarEvent) => {
          if (calendarEvent.id === id) {
            return {
              ...calendarEvent,
              start: dayjs(start).toDate(),
              end: dayjs(end).toDate(),
            };
          }
          return calendarEvent;
        });
        setCalendarEvents(newCalendarEvents);
      }}
    />
  );
}
