import { useEffect, useContext, useState } from "react";
import { listCalendars } from "../../api/calendars/listCalendars";
import { listMultipleCalendarsEvents } from "../../api/calendars/listMultipleCalendarsEvents";
import { CalendarAPIContext } from "../../providers/CalendarAPIProvider";

function useFetchCalendars() {
  const { loading: loadingCalendarAPI } = useContext(CalendarAPIContext);
  const [error, setError] = useState(null);

  const fetchCalendars = async () => {
    const { calendarsList, error: listCalendarsError } = await listCalendars();

    if (listCalendarsError) {
      return setError(listCalendarsError);
    }

    const calendarIds = calendarsList.map(({ id }) => id);

    const {
      calendarEvents,
      error: listMultipleCalendarEventsError,
    } = await listMultipleCalendarsEvents({ calendarIds });

    if (listMultipleCalendarEventsError) {
      setError(listMultipleCalendarEventsError);
    }

    console.log(calendarEvents);
  };

  useEffect(() => {
    if (loadingCalendarAPI) {
      return;
    }

    fetchCalendars();
  }, [loadingCalendarAPI]);

  return { error };
}

export { useFetchCalendars };
