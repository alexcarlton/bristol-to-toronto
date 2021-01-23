import React from "react";
import styled from "styled-components";

export const MINUTE_HEIGHT = 1.5;
export const HOUR_HEIGHT = MINUTE_HEIGHT * 60;

const Container = styled.div`
  min-height: ${HOUR_HEIGHT}px;
  border: solid 1px ${(props) => props.theme.colors.darkGrey};
  border-top: none;
`;

function CalendarBodyHour() {
  return <Container />;
}

export { CalendarBodyHour };
