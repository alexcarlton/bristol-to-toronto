import React from "react";
import styled from "styled-components";

const Header = styled.header`
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

function LayoutHeader({ title }) {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
}

export { LayoutHeader };
