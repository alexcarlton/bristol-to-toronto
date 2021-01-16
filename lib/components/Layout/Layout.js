import styled from "styled-components";
import { LayoutHeader } from "./LayoutHeader";
import { LayoutMain } from "./LayoutMain";

const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function Layout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

Layout.Header = LayoutHeader;
Layout.Main = LayoutMain;

export { Layout };
