import React from "react";
import styled from "styled-components";
import { HoursColumn } from "./HoursColumn";
import { useCurrentWeek } from "../../hooks/dates/useCurrentWeek/useCurrentWeek";
import { DayColumn } from "./DayColumn";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  border: solid 1px pink;
  height: 5rem;
`;

function CalendarHeader() {
  const currentWeek = useCurrentWeek();

  if (!currentWeek) {
    return null;
  }

  return (
    <Container>
      <HoursColumn />
      {currentWeek.map((day) => (
        <DayColumn key={day.date}></DayColumn>
      ))}
    </Container>
  );
}

export { CalendarHeader };
