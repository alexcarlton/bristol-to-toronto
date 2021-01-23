export const ADD_ACTIVE_CALENDAR_ID = "ADD_ACTIVE_CALENDAR_ID";

function addActiveCalendarId(calendarId) {
  return {
    type: ADD_ACTIVE_CALENDAR_ID,
    payload: {
      calendarId,
    },
  };
}

export { addActiveCalendarId };
