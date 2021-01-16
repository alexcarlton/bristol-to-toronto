import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 50px;

  background: ${(props) => props.theme.colors.grey};
  border-bottom: 1px solid ${(props) => props.theme.colors.darkGrey};
`;

function LayoutHeader({ children }) {
  return <Header>{children}</Header>;
}

export { LayoutHeader };
