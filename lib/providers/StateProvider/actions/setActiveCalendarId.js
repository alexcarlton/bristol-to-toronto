export const SET_ACTIVE_CALENDAR_ID = "SET_ACTIVE_CALENDAR_ID";

function setActiveCalendarId(calendarId) {
  return {
    type: SET_ACTIVE_CALENDAR_ID,
    payload: {
      calendarId,
    },
  };
}

export { setActiveCalendarId };
