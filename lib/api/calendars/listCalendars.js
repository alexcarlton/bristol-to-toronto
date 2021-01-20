async function listCalendars() {
  try {
    const {
      result: { items },
    } = await gapi.client.calendar.calendarList.list();

    return {
      error: null,
      calendarsList: items.map(({ backgroundColor, summary, id }) => ({
        backgroundColor,
        summary,
        id,
      })),
    };
  } catch (error) {
    return { error, calendarsList: null };
  }
}

export { listCalendars };
