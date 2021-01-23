export const REMOVE_ACTIVE_CALENDAR_ID = "REMOVE_ACTIVE_CALENDAR_ID";

function removeActiveCalendarId(calendarId) {
  return {
    type: REMOVE_ACTIVE_CALENDAR_ID,
    payload: {
      calendarId,
    },
  };
}

export { removeActiveCalendarId };
