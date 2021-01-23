import React from "react";
import styled from "styled-components";
import { DayColumn } from "../DayColumn";

const Container = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;

  border-left: solid 1px ${(props) => props.theme.colors.darkGrey};
`;

const Day = styled.h2`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) =>
    props.selected
      ? props.theme.fonts.colors.grey
      : props.theme.fonts.colors.lightGrey};

  font-size: 1rem;
  font-weight: 300;
`;

const Date = styled.strong`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) =>
    props.selected ? "white" : props.theme.fonts.colors.darkGrey};
  font-size: 1.25rem;
  font-weight: 500;

  background: ${(props) => (props.selected ? props.theme.colors.blue : "none")};

  border-radius: 100%;

  padding: 0.5rem;
  margin: 0.25rem;
`;

function CalendarHeaderDay({ date, day, isCurrentDay }) {
  return (
    <DayColumn>
      <Container>
        <Date selected={isCurrentDay}>{date}</Date>
        <Day selected={isCurrentDay}>{day}</Day>
      </Container>
    </DayColumn>
  );
}

export { CalendarHeaderDay };
