import { useContext } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { StateContext, StateProvider } from "../StateProvider";
import { setCalendars } from "../actions/setCalendars";
import { setEvents } from "../actions/setEvents";

describe("StateProvider", () => {
  const wrapper = ({ children }) => <StateProvider>{children}</StateProvider>;

  it("should return the initial state", () => {
    const { result } = renderHook(() => useContext(StateContext), { wrapper });

    expect(result.current.state).toEqual({
      calendars: {
        byId: {},
      },
      events: {
        byCalendarId: {},
      },
    });
  });

  it("should handle the setCalendarsAction", () => {
    const { result } = renderHook(() => useContext(StateContext), { wrapper });

    const calendars = [
      { id: "1", name: "Calendar 1" },
      { id: "2", name: "Calendar 2" },
      { id: "3", name: "Calendar 3" },
    ];

    act(() => result.current.dispatch(setCalendars(calendars)));

    expect(result.current.state).toEqual({
      calendars: {
        byId: {
          1: { id: "1", name: "Calendar 1" },
          2: { id: "2", name: "Calendar 2" },
          3: { id: "3", name: "Calendar 3" },
        },
      },
      events: {
        byCalendarId: {},
      },
    });
  });

  it("should handle the setEvents action", () => {
    const { result } = renderHook(() => useContext(StateContext), { wrapper });

    const events = [
      {
        calendarId: "calendar-1",
        eventsList: [
          { id: "event-1", name: "My Birthday" },
          { id: "event-2", name: "Ems Birthday" },
        ],
      },
      {
        calendarId: "calendar-2",
        eventsList: [
          { id: "event-3", name: "Meeting" },
          { id: "event-4", name: "Friday beers" },
        ],
      },
    ];

    act(() => result.current.dispatch(setEvents(events)));

    expect(result.current.state).toEqual({
      calendars: {
        byId: {},
      },
      events: {
        byCalendarId: {
          "calendar-1": [
            { id: "event-1", name: "My Birthday" },
            { id: "event-2", name: "Ems Birthday" },
          ],
          "calendar-2": [
            { id: "event-3", name: "Meeting" },
            { id: "event-4", name: "Friday beers" },
          ],
        },
      },
    });
  });

  it("should handle an unknown action", () => {
    const { result } = renderHook(() => useContext(StateContext), { wrapper });

    act(() => result.current.dispatch({ type: "UNKNOWN_ACTION" }));

    expect(result.current.state).toEqual({
      calendars: {
        byId: {},
      },
      events: {
        byCalendarId: {},
      },
    });
  });
});
