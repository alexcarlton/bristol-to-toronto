import React from "react";
import styled from "styled-components";

const Container = styled.aside`
  border: solid 1px red;
  width: 15rem;
`;

function Sidebar({ children }) {
  return <Container>{children}</Container>;
}

export { Sidebar };
