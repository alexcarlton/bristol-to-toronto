import React from "react";
import styled from "styled-components";

const Main = styled.main`
  border: solid 1px pink;
  display: flex;
  flex: 1;
`;

function LayoutMain({ children }) {
  return <Main>{children}</Main>;
}

export { LayoutMain };
