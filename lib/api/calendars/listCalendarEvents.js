async function listCalendarEvents({ calendarId }) {
  try {
    const {
      result: { items },
    } = await gapi.client.calendar.events.list({
      calendarId,
    });

    return { eventsList: items, error: null };
  } catch (error) {
    return { eventsList: null, error };
  }
}

export { listCalendarEvents };
