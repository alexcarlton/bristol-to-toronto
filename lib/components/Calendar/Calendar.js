import React from "react";
import styled from "styled-components";
import { CalendarHeader } from "./CalendarHeader/CalendarHeader";
import { CalendarBody } from "./CalendarBody/CalendarBody";

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  margin: 20px;
  background: white;
  border-radius: 10px;

  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.1);
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
