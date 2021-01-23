import React from "react";
import styled from "styled-components";
import { CalendarHeader } from "./CalendarHeader/CalendarHeader";
import { CalendarBody } from "./CalendarBody/CalendarBody";

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  border: solid 1px green;
`;

function Calendar() {
  return (
    <Container>
      <CalendarHeader />
      <CalendarBody />
    </Container>
  );
}

export { Calendar };
