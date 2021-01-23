import React from "react";
import styled from "styled-components";
import { HoursColumn } from "./HoursColumn";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  border: solid 1px pink;
  height: 5rem;
`;

function CalendarHeader() {
  return (
    <Container>
      <HoursColumn />
    </Container>
  );
}

export { CalendarHeader };
