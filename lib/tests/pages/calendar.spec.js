import React from "react";
import { render, waitFor } from "@testing-library/react";
import { CalendarAPIProvider } from "../../providers/CalendarAPIProvider";
import { SignedInProvider } from "../../providers/SignedInProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { StateProvider } from "../../providers/StateProvider/StateProvider";
import CalendarPage from "../../../pages/calendar";
import * as listCalendars from "../../api/calendars/listCalendars";
import * as listCalendarEvents from "../../api/calendars/listCalendarEvents";

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

const calendar1MockEvents = [
  {
    id: "event-1",
    summary: "Event 1",
    start: null,
    end: null,
    backgroundColor: "red",
  },
];

const calendar2MockEvents = [
  {
    id: "event-1",
    summary: "Event 1",
    start: null,
    end: null,
    backgroundColor: "green",
  },
];

describe("calendar page", () => {
  beforeEach(() => {
    jest.spyOn(listCalendars, "listCalendars").mockImplementation(async () => ({
      error: null,
      calendarsList: mockCalendarsList,
    }));

    jest
      .spyOn(listCalendarEvents, "listCalendarEvents")
      .mockImplementation(async ({ id }) => {
        if (id === mockCalendarsList[0].id) {
          return { error: null, eventsList: calendar1MockEvents };
        }

        return { error: null, eventsList: calendar2MockEvents };
      });
  });

  it("should select the first calendar by default", async () => {
    const { getByText } = render(<CalendarRoute />);

    await waitFor(() => getByText("January"));
  });

  it("should show events for the default calendar on load", () => {});

  it("should allow you to deselect the default calendar, and remove the events", () => {});

  it("should allow you to select another calendar, and see the events for that calendar", () => {});

  it("should show the current day as highlighted", () => {});
});
