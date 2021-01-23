import React, { useContext } from "react";
import { map } from "lodash";
import styled from "styled-components";
import { StateContext } from "../../providers/StateProvider/StateProvider";
import { SidebarItem } from "./SidebarItem";

const Container = styled.aside`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  width: 15rem;
`;

const Header = styled.h2`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.fonts.colors.mediumGrey};
  font-size: 0.75rem;
  font-weight: 500;

  margin-left: 0.75rem;
`;

function Sidebar() {
  const { state } = useContext(StateContext);

  return (
    <Container>
      <Header>CALENDARS</Header>
      {map(state.calendars.byId, (calendar) => (
        <SidebarItem key={calendar.id} calendar={calendar} />
      ))}
    </Container>
  );
}

export { Sidebar };
