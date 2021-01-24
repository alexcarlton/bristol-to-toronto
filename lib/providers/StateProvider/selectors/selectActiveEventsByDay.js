import { createSelector } from "reselect";
import { DateTime } from "luxon";
import { selectActiveEvents } from "./selectActiveEvents";

function selectActiveEventsByDay({ dayStartTime }) {
  return createSelector(selectActiveEvents, (activeEvents) => {
    return activeEvents.filter(({ start: eventStartTime }) => {
      const dayStart = DateTime.fromISO(dayStartTime);
      const eventStart = DateTime.fromISO(eventStartTime);

      return dayStart.hasSame(eventStart, "day");
    });
  });
}

export { selectActiveEventsByDay };
