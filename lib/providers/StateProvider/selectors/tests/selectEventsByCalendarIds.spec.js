import { selectEventsCalendarIds } from "../selectEventsCalendarIds";

describe("selectEventsByCalendarIds", () => {
  it("should select events by calendar ids", () => {
    const state = {
      events: {
        byCalendarId: {
          1: [{ id: "event-1" }, { id: "event-2" }],
          2: [{ id: "event-3" }, { id: "event-4" }],
          3: [{ id: "event-5" }, { id: "event-6" }],
        },
      },
    };

    expect(selectEventsCalendarIds(["1", "2"])(state)).toEqual([
      { id: "event-1" },
      { id: "event-2" },
      { id: "event-3" },
      { id: "event-4" },
    ]);
  });
});
