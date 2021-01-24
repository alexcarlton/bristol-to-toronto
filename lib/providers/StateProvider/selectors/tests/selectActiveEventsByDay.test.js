import {selectActiveEventsByDay} from "../selectActiveEventsByDay";

describe("selectActiveEvents", () => {
  it("should select events for the active calendars for the specified day", () => {
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

    expect(selectActiveEventsByDay()(state)).toEqual({

    })
  });
});
