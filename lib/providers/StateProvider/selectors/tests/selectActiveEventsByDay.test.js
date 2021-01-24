import { selectActiveEventsByDay } from "../selectActiveEventsByDay";
import { DateTime } from "luxon";

describe("selectActiveEventsByDay", () => {
  it("should select events for the active calendars for the specified day", () => {
    const dayToSelectBy = DateTime.fromObject({
      year: 2021,
      month: 1,
      day: 18,
      hour: 12,
      zone: "UTC+0",
    }).toISO();

    const state = {
      calendars: {
        activeCalendarIds: ["1", "2"],
      },
      events: {
        byCalendarId: {
          1: [{ id: "event-1", start: dayToSelectBy }, { id: "event-2" }],
          2: [{ id: "event-3" }, { id: "event-4", start: dayToSelectBy }],
          3: [{ id: "event-5" }, { id: "event-6" }],
        },
      },
    };

    expect(
      selectActiveEventsByDay({ dayStartTime: dayToSelectBy })(state)
    ).toEqual([
      { id: "event-1", start: dayToSelectBy },
      { id: "event-4", start: dayToSelectBy },
    ]);
  });
});
