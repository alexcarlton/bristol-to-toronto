import { listCalendarEvents } from "./listCalendarEvents";

async function listMultipleCalendarsEvents({ calendars, timeMin, timeMax }) {
  try {
    const calendarEvents = await Promise.all(
      calendars.map(async ({ id, backgroundColor }) => {
        const { eventsList, error } = await listCalendarEvents({
          calendarId: id,
          timeMin,
          timeMax,
          backgroundColor,
        });

        return { calendarId: id, eventsList, error };
      })
    );

    const hasError = calendarEvents.some((result) => result.error);

    if (hasError) {
      throw new Error(
        "Something went wrong when fetching multiple calendar events"
      );
    }

    return { calendarEvents, error: null };
  } catch (error) {
    return { calendarEvents: null, error };
  }
}

export { listMultipleCalendarsEvents };
