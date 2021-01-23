import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  border: solid 1px red;

  min-height: 0;
  overflow-y: auto;
`;

function CalendarBody({ children }) {
  return <Container>{children}</Container>;
}

export { CalendarBody };
