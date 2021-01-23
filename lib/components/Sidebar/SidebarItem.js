import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../providers/StateProvider/StateProvider";
import { removeActiveCalendarId } from "../../providers/StateProvider/actions/removeActiveCalendarId";
import { addActiveCalendarId } from "../../providers/StateProvider/actions/addActiveCalendarId";

const Button = styled.button`
  display: flex;
  align-items: center;

  cursor: pointer;

  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.fonts.colors.mediumGrey};
  text-align: left;
  font-weight: 300;

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

function SidebarItem({ calendar }) {
  const { dispatch, state } = useContext(StateContext);

  const active = state.calendars.activeCalendarIds.includes(calendar.id);

  const onClick = () => {
    if (active) {
      return dispatch(removeActiveCalendarId(calendar.id));
    }

    return dispatch(addActiveCalendarId(calendar.id));
  };

  return (
    <Button active={active} onClick={onClick}>
      <Dot backgroundColor={calendar.backgroundColor} />
      {calendar.summary}
    </Button>
  );
}

export { SidebarItem };
