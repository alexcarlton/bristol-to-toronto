import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex: 1;

  min-height: 0;
  overflow-y: auto;

  background: ${(props) => props.theme.colors.grey};
`;

function LayoutMain({ children }) {
  return <Main>{children}</Main>;
}

export { LayoutMain };
