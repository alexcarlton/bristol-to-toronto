async function listCalendarEvents({ calendarId, timeMin, timeMax }) {
  try {
    const {
      result: { items },
    } = await gapi.client.calendar.events.list({
      calendarId,
      timeMin,
      timeMax,
    });

    return { eventsList: items, error: null };
  } catch (error) {
    return { eventsList: null, error };
  }
}

export { listCalendarEvents };
