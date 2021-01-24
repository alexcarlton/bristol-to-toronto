import { createSelector } from "reselect";
import { reduce } from "lodash";

const selectActiveEvents = createSelector(
  (state) => state.events.byCalendarId,
  (state) => state.calendars.activeCalendarIds,
  (eventsByCalendarId, activeCalendarIds) => {
    return reduce(
      eventsByCalendarId,
      (acc, events, calendarId) => {
        if (activeCalendarIds.includes(calendarId)) {
          return [...acc, ...events];
        }

        return acc;
      },
      []
    );
  }
);

export { selectActiveEvents };
