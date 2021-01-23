import React from "react";
import styled from "styled-components";
import { CalendarHeader } from "./CalendarHeader";

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;

  border: solid 1px green;
`;

function Calendar() {
  return (
    <Container>
      <CalendarHeader />
    </Container>
  );
}

export { Calendar };
