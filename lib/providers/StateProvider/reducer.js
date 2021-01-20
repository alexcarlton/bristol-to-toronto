import { SET_CALENDARS } from "./actions/setCalendars";
import { SET_EVENTS } from "./actions/setEvents";

function reducer(state, action) {
  switch (action.type) {
    case SET_CALENDARS:
      return {
        ...state,
        calendars: {
          byId: action.payload.calendars.reduce((acc, calendar) => {
            return { ...acc, [calendar.id]: calendar };
          }, {}),
        },
      };

    case SET_EVENTS:
      console.log(action);
      return {
        ...state,
        events: {
          byCalendarId: action.payload.events.reduce(
            (acc, { calendarId, eventsList }) => {
              return {
                ...acc,
                [calendarId]: eventsList,
              };
            },
            {}
          ),
        },
      };

    default:
      return state;
  }
}

export { reducer };
