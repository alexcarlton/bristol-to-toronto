export const SET_CALENDARS = "SET_CALENDARS";

function setCalendars(calendars) {
  return {
    type: SET_CALENDARS,
    payload: {
      calendars,
    },
  };
}

export { setCalendars };
