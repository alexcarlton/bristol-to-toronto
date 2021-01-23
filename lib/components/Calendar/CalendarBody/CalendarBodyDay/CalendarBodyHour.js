import React from "react";
import styled from "styled-components";

export const MINUTE_HEIGHT = 1.5;
export const HOUR_HEIGHT = MINUTE_HEIGHT * 60;

const Container = styled.div`
  min-height: ${HOUR_HEIGHT}px;
  border-bottom: solid 1px ${(props) => props.theme.colors.darkGrey};
  border-left: solid 1px ${(props) => props.theme.colors.darkGrey};
`;

function CalendarBodyHour() {
  return <Container />;
}

export { CalendarBodyHour };
