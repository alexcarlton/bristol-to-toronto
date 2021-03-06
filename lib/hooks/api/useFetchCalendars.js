import { useEffect, useContext, useState } from "react";
import { listCalendars } from "../../api/calendars/listCalendars";
import { listMultipleCalendarsEvents } from "../../api/calendars/listMultipleCalendarsEvents";
import { CalendarAPIContext } from "../../providers/CalendarAPIProvider";
import { StateContext } from "../../providers/StateProvider/StateProvider";
import { setCalendars } from "../../providers/StateProvider/actions/setCalendars";
import { setEvents } from "../../providers/StateProvider/actions/setEvents";
import { useCurrentWeek } from "../dates/useCurrentWeek/useCurrentWeek";
import { addActiveCalendarId } from "../../providers/StateProvider/actions/addActiveCalendarId";

function useFetchCalendars() {
  const { loading: loadingCalendarAPI } = useContext(CalendarAPIContext);
  const { dispatch } = useContext(StateContext);
  const currentWeek = useCurrentWeek();

  const [error, setError] = useState(null);

  const fetchCalendars = async () => {
    const { calendarsList, error: listCalendarsError } = await listCalendars();

    if (listCalendarsError) {
      return setError(listCalendarsError);
    }

    dispatch(addActiveCalendarId(calendarsList[0].id));
    dispatch(setCalendars(calendarsList));

    const {
      calendarEvents,
      error: listMultipleCalendarEventsError,
    } = await listMultipleCalendarsEvents({
      calendars: calendarsList,
      timeMin: currentWeek[0].startTime,
      timeMax: currentWeek[6].endTime,
    });

    if (listMultipleCalendarEventsError) {
      setError(listMultipleCalendarEventsError);
    }

    dispatch(setEvents(calendarEvents));
  };

  useEffect(() => {
    if (loadingCalendarAPI || currentWeek === null) {
      return;
    }

    fetchCalendars();
  }, [loadingCalendarAPI, currentWeek]);

  return { error };
}

export { useFetchCalendars };
