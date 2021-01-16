import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 50px;
  border: 1px solid green;
`;

function LayoutHeader({ children }) {
  return <Header>{children}</Header>;
}

export { LayoutHeader };
