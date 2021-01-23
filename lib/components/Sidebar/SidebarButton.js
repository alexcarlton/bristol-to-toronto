import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;

  cursor: pointer;

  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.fonts.colors.grey};
  text-align: left;

  padding: 0.5rem;
  margin: 0.125rem;

  border: none;
  border-radius: 5px;

  background: ${(props) => (props.active ? "white" : "none")};
  box-shadow: ${(props) =>
    props.active ? "0px 3px 4px -2px rgb(0 0 0 / 20%)" : "none"};
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;

  margin-right: 0.5rem;

  background: ${(props) => props.backgroundColor};
`;

function SidebarButton({ active, calendarColor, children, ...rest }) {
  return (
    <Button active={active} {...rest}>
      <Dot backgroundColor={calendarColor} />
      {children}
    </Button>
  );
}

export { SidebarButton };
