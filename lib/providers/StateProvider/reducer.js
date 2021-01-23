import { SET_CALENDARS } from "./actions/setCalendars";
import { SET_EVENTS } from "./actions/setEvents";
import { ADD_ACTIVE_CALENDAR_ID } from "./actions/addActiveCalendarId";
import { REMOVE_ACTIVE_CALENDAR_ID } from "./actions/removeActiveCalendarId";

function reducer(state, action) {
  switch (action.type) {
    case SET_CALENDARS:
      return {
        ...state,
        calendars: {
          ...state.calendars,
          byId: action.payload.calendars.reduce((acc, calendar) => {
            return { ...acc, [calendar.id]: calendar };
          }, {}),
        },
      };

    case SET_EVENTS:
      return {
        ...state,
        events: {
          ...state.events,
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

    case ADD_ACTIVE_CALENDAR_ID:
      return {
        ...state,
        calendars: {
          ...state.calendars,
          activeCalendarIds: [
            ...state.calendars.activeCalendarIds,
            action.payload.calendarId,
          ],
        },
      };

    case REMOVE_ACTIVE_CALENDAR_ID:
      return {
        ...state,
        calendars: {
          ...state.calendars,
          activeCalendarIds: state.calendars.activeCalendarIds.filter(
            (id) => id !== action.payload.calendarId
          ),
        },
      };

    default:
      return state;
  }
}

export { reducer };
