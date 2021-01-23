import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  text-align: left;
  padding: 0.5rem;
  margin: 0.25rem;

  border: none;
  background: ${(props) => (props.active ? "white" : "none")};
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.active ? "0px 3px 4px -2px rgb(0 0 0 / 20%)" : "none"};
`;

function SidebarButton({ active, children, ...rest }) {
  return (
    <Button active={active} {...rest}>
      {children}
    </Button>
  );
}

export { SidebarButton };
