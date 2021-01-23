import React from "react";
import styled from "styled-components";
import { times } from "lodash";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { HoursColumn } from "./HoursColumn";
import { useCurrentWeek } from "../../hooks/dates/useCurrentWeek/useCurrentWeek";
import { DayColumn } from "./DayColumn";
import { Hour } from "./Hour";

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  border: solid 1px green;
`;

function Calendar() {
  const currentWeek = useCurrentWeek();

  const HOURS_IN_DAY = 24;

  if (!currentWeek) {
    return null;
  }

  return (
    <Container>
      <CalendarHeader />
      <CalendarBody>
        <HoursColumn></HoursColumn>
        {currentWeek.map((day) => (
          <DayColumn key={day.date}>
            {times(HOURS_IN_DAY, (index) => (
              <Hour key={index + day.date} />
            ))}
          </DayColumn>
        ))}
      </CalendarBody>
    </Container>
  );
}

export { Calendar };
