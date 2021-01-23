import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  min-width: 5rem;
  border: solid 1px yellow;
`;

function DayColumn({ children }) {
  return <Container>{children}</Container>;
}

export { DayColumn };
