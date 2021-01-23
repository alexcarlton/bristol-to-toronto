import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex: 1;

  border: solid 1px green;
`;

function Calendar({ children }) {
  return <Container>{children}</Container>;
}

export { Calendar };
