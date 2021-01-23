import React from "react";
import styled from "styled-components";
import { CalendarBodyDay } from "./CalendarBodyDay/CalendarBodyDay";
import { useCurrentWeek } from "../../../hooks/dates/useCurrentWeek/useCurrentWeek";
import { CalendarBodyHourLabels } from "./CalendarBodyHourLabels/CalendarBodyHourLabels";

const Container = styled.div`
  display: flex;
  flex: 1;
  border: solid 1px red;

  min-height: 0;
  overflow-y: overlay;
`;

function CalendarBody() {
  const currentWeek = useCurrentWeek();

  if (!currentWeek) {
    return null;
  }

  return (
    <Container>
      <CalendarBodyHourLabels />
      {currentWeek.map((day) => (
        <CalendarBodyDay key={day.date} day={day} />
      ))}
    </Container>
  );
}

export { CalendarBody };
