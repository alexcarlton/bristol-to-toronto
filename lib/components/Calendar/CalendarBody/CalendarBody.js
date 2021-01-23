import React from "react";
import styled from "styled-components";
import { HoursColumn } from "../HoursColumn";
import { Day } from "./Day/Day";
import { useCurrentWeek } from "../../../hooks/dates/useCurrentWeek/useCurrentWeek";

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
      <HoursColumn></HoursColumn>
      {currentWeek.map((day) => (
        <Day key={day.date} day={day} />
      ))}
    </Container>
  );
}

export { CalendarBody };
