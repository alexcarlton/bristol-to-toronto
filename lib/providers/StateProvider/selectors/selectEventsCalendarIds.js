import { reduce } from "lodash";

function selectEventsCalendarIds(calendarIds) {
  return (state) => {
    return reduce(
      state.events.byCalendarId,
      (acc, events, calendarId) => {
        if (calendarIds.includes(calendarId)) {
          return [...acc, ...events];
        }

        return acc;
      },
      []
    );
  };
}

export { selectEventsCalendarIds };
