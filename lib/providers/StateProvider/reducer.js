import { SET_CALENDARS } from "./actions/setCalendars";

function reducer(state, action) {
  switch (action.type) {
    case SET_CALENDARS:
      return {
        ...state,
        calendars: action.payload.calendars.reduce((acc, calendar) => {
          return { ...acc, [calendar.id]: calendar };
        }, {}),
      };
    default:
      return state;
  }
}

export { reducer };
