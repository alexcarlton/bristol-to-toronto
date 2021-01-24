import React from "react";
import styled from "styled-components";
import { useAuth } from "../../hooks/auth/useAuth";
import { Button } from "../core/Button";

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  background: ${(props) => props.theme.colors.grey};
  border-bottom: 1px solid ${(props) => props.theme.colors.darkGrey};

  padding: 1rem;
`;

const Title = styled.h1`
  margin: 0;

  color: ${(props) => props.theme.fonts.colors.grey};
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-weight: 300;
`;

function LayoutHeader({ title, showSignOut }) {
  const { signOut } = useAuth();

  return (
    <Header>
      <Title>{title}</Title>
      {showSignOut && <Button onClick={signOut}>Sign Out</Button>}
    </Header>
  );
}

LayoutHeader.defaultProps = {
  showSignOut: true,
};

export { LayoutHeader };
