import React from "react";
import styled from "styled-components";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { HoursColumn } from "./HoursColumn";
import { useCurrentWeek } from "../../hooks/dates/useCurrentWeek/useCurrentWeek";
import { DayColumn } from "./DayColumn";

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  border: solid 1px green;
`;

function Calendar() {
  const currentWeek = useCurrentWeek();

  if (!currentWeek) {
    return null;
  }

  return (
    <Container>
      <CalendarHeader />
      <CalendarBody>
        <HoursColumn></HoursColumn>
        {currentWeek.map((day) => (
          <DayColumn key={day.date}></DayColumn>
        ))}
      </CalendarBody>
    </Container>
  );
}

export { Calendar };
