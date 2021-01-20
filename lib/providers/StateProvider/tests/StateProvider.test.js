import { useContext } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { StateContext, StateProvider } from "../StateProvider";

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

  it("should handle the setCalendarsAction", () => {});

  it("should handle the setEvents action", () => {});

  it("should handle an unknown action", () => {});
});
