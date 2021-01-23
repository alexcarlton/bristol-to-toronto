import React from "react";
import styled from "styled-components";
import { HoursColumn } from "../HoursColumn";
import { useCurrentWeek } from "../../../hooks/dates/useCurrentWeek/useCurrentWeek";
import { CalendarHeaderDay } from "./CalendarHeaderDay";

const Container = styled.div`
  display: flex;
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
        <CalendarHeaderDay
          key={day.date}
          isCurrentDay={day.isCurrentDay}
          day={day.day}
          date={day.date}
        />
      ))}
    </Container>
  );
}

export { CalendarHeader };
