import { reduce } from "lodash";

function selectActiveEvents(state) {
  return reduce(
    state.events.byCalendarId,
    (acc, events, calendarId) => {
      if (state.calendars.activeCalendarIds.includes(calendarId)) {
        return [...acc, ...events];
      }

      return acc;
    },
    []
  );
}

export { selectActiveEvents };
