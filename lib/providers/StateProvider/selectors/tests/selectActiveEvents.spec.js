import { selectActiveEvents } from "../selectActiveEvents";

describe("selectActiveEvents", () => {
  it("should select events for the active calendars", () => {
    const state = {
      calendars: {
        activeCalendarIds: ["1", "2"],
      },
      events: {
        byCalendarId: {
          1: [{ id: "event-1" }, { id: "event-2" }],
          2: [{ id: "event-3" }, { id: "event-4" }],
          3: [{ id: "event-5" }, { id: "event-6" }],
        },
      },
    };

    expect(selectActiveEvents(state)).toEqual([
      { id: "event-1" },
      { id: "event-2" },
      { id: "event-3" },
      { id: "event-4" },
    ]);
  });
});
