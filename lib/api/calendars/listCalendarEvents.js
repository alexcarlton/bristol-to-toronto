const mapEvent = ({
  summary,
  id,
  start: { dateTime: startTime, date: startDate },
  end: { dateTime: endTime, date: endDate },
}) => ({
  id,
  start: startTime || startDate,
  end: endTime || endDate,
  summary,
});

async function listCalendarEvents({ calendarId, timeMin, timeMax }) {
  try {
    const {
      result: { items },
    } = await gapi.client.calendar.events.list({
      calendarId,
      timeMin,
      timeMax,
    });

    return {
      eventsList: items.map(mapEvent),
      error: null,
    };
  } catch (error) {
    return { eventsList: null, error };
  }
}

export { listCalendarEvents };
