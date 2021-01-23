const mapEvent = ({
  summary,
  start: { dateTime: start },
  end: { dateTime: end },
}) => ({
  start,
  end,
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
