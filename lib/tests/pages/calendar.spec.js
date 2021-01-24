import React from "react";
import { render } from "@testing-library/react";
import { CalendarAPIProvider } from "../../providers/CalendarAPIProvider";
import { SignedInProvider } from "../../providers/SignedInProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { StateProvider } from "../../providers/StateProvider/StateProvider";
import CalendarPage from "../../../pages/calendar";

jest.mock("../../providers/CalendarAPIProvider");

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

describe("calendar page", () => {
  it("should select the first calendar by default", () => {
    const { getByText } = render(<CalendarRoute />);

    getByText("January");
  });

  it("should show events for the default calendar on load", () => {});

  it("should allow you to deselect the default calendar, and remove the events", () => {});

  it("should allow you to select another calendar, and see the events for that calendar", () => {});

  it("should show the current day as highlighted", () => {});
});
