import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 4rem;
`;

function HoursColumn({ children }) {
  return <Container>{children}</Container>;
}

export { HoursColumn };
