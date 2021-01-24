const mapEvent = (
  {
    summary,
    id,
    start: { dateTime: startTime, date: startDate },
    end: { dateTime: endTime, date: endDate },
  },
  { backgroundColor }
) => ({
  id,
  start: startTime || startDate,
  end: endTime || endDate,
  summary,
  backgroundColor,
});

async function listCalendarEvents({
  calendarId,
  timeMin,
  timeMax,
  backgroundColor,
}) {
  try {
    const {
      result: { items },
    } = await gapi.client.calendar.events.list({
      calendarId,
      timeMin,
      timeMax,
      singleEvents: true
    });

    return {
      eventsList: items.map((event) => mapEvent(event, { backgroundColor })),
      error: null,
    };
  } catch (error) {
    return { eventsList: null, error };
  }
}

export { listCalendarEvents };
