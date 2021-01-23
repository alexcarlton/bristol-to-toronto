import React, { useContext } from "react";
import { map } from "lodash";
import styled from "styled-components";
import { StateContext } from "../../providers/StateProvider/StateProvider";
import { SidebarButton } from "./SidebarButton";

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
        <SidebarButton
          key={calendar.id}
          calendarId={calendar.id}
          active={state.calendars.activeCalendarIds.includes(calendar.id)}
          calendarColor={calendar.backgroundColor}
        >
          {calendar.summary}
        </SidebarButton>
      ))}
    </Container>
  );
}

export { Sidebar };
