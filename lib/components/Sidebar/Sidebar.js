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

function Sidebar() {
  const { state } = useContext(StateContext);

  return (
    <Container>
      {map(state.calendars.byId, (calendar) => (
        <SidebarItem key={calendar.id} calendar={calendar} />
      ))}
    </Container>
  );
}

export { Sidebar };
