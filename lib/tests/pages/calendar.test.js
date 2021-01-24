import React from "react";
import { render, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CalendarAPIProvider } from "../../providers/CalendarAPIProvider";
import { SignedInProvider } from "../../providers/SignedInProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { StateProvider } from "../../providers/StateProvider/StateProvider";
import CalendarPage from "../../../pages/calendar";
import * as listCalendars from "../../api/calendars/listCalendars";
import * as listCalendarEvents from "../../api/calendars/listCalendarEvents";
import { DateTime } from "luxon";

jest.mock("../../providers/CalendarAPIProvider");
jest.mock("../../providers/SignedInProvider");

const CalendarRoute = () => (
  <StateProvider>
    <CalendarAPIProvider>
      <SignedInProvider>
        <ThemeProvider theme={theme}>
          <CalendarPage />
        </ThemeProvider>
      </SignedInProvider>
    </CalendarAPIProvider>
  </StateProvider>
);

const mockCalendarsList = [
  { id: "calendar-1", summary: "Calendar 1", backgroundColor: "red" },
  { id: "calendar-2", summary: "Calendar 2", backgroundColor: "green" },
];

const currentTime = {
  year: 2021,
  month: 1,
  day: 24,
  hour: 12,
  zone: "UTC+0",
};

const mockCurrentTime = DateTime.fromObject(currentTime);

const mockEventsLists = [
  [
    {
      id: "event-1",
      summary: "Event 1",
      start: DateTime.fromObject({ ...currentTime, day: 25, hour: 10 }).toISO(),
      end: DateTime.fromObject({ ...currentTime, day: 25, hour: 11 }).toISO(),
      backgroundColor: "red",
    },
    {
      id: "event-2",
      summary: "Event 2",
      start: DateTime.fromObject({ ...currentTime, day: 26, hour: 12 }).toISO(),
      end: DateTime.fromObject({ ...currentTime, day: 26, hour: 13 }).toISO(),
      backgroundColor: "red",
    },
  ],
  [
    {
      id: "event-3",
      summary: "Event 3",
      start: DateTime.fromObject({ ...currentTime, day: 27, hour: 14 }).toISO(),
      end: DateTime.fromObject({ ...currentTime, day: 27, hour: 16 }).toISO(),
      backgroundColor: "green",
    },
    {
      id: "event-4",
      summary: "Event 4",
      start: DateTime.fromObject({ ...currentTime, day: 29, hour: 16 }).toISO(),
      end: DateTime.fromObject({ ...currentTime, day: 29, hour: 19 }).toISO(),
      backgroundColor: "green",
    },
  ],
];

describe("calendar page", () => {
  beforeEach(() => {
    jest.spyOn(listCalendars, "listCalendars").mockImplementation(async () => ({
      error: null,
      calendarsList: mockCalendarsList,
    }));

    jest
      .spyOn(listCalendarEvents, "listCalendarEvents")
      .mockImplementation(async ({ calendarId }) => {
        if (calendarId === mockCalendarsList[0].id) {
          return { error: null, eventsList: mockEventsLists[0] };
        }

        return { error: null, eventsList: mockEventsLists[1] };
      });

    jest.spyOn(DateTime, "local").mockImplementation(() => mockCurrentTime);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should display the month and year", async () => {
    const { getByText } = render(<CalendarRoute />);

    await waitFor(() => getByText("January, 2021"));
  });

  it("should show events for the default (first) calendar on load", async () => {
    const { getByText } = render(<CalendarRoute />);

    await waitFor(() => getByText("Event 1"));
    getByText("10 - 11am");

    getByText("Event 2");
    getByText("12 - 1pm");
  });

  it("should allow you to deselect the default calendar, and remove the events", async () => {
    const { getByText, getByRole, queryByText } = render(<CalendarRoute />);

    await waitFor(() => getByText("Event 1"));
    getByText("10 - 11am");

    getByText("Event 2");
    getByText("12 - 1pm");

    const defaultCalendarSidebarButton = getByRole("button", {
      name: "Calendar 1",
    });

    act(() => userEvent.click(defaultCalendarSidebarButton));

    expect(queryByText("Event 1")).toBe(null);
    expect(queryByText("Event 2")).toBe(null);
  });

  it("should allow you to select another calendar, and see the events for that calendar", () => {});

  it("should show the current day as highlighted", () => {});
});
