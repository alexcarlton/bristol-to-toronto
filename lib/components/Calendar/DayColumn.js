import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  min-width: 5rem;

  position: relative;
`;

function DayColumn({ children }) {
  return <Container>{children}</Container>;
}

export { DayColumn };
