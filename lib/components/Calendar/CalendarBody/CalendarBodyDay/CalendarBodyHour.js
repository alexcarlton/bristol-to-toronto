import React from "react";
import styled from "styled-components";

const BODY_HOUR_BORDER_WIDTH = 1;

export const MINUTE_HEIGHT = 1.5;
export const HOUR_HEIGHT = MINUTE_HEIGHT * 60 - BODY_HOUR_BORDER_WIDTH;

const Container = styled.div`
  min-height: ${HOUR_HEIGHT}px;
  border-bottom: solid ${BODY_HOUR_BORDER_WIDTH}px
    ${(props) => props.theme.colors.darkGrey};
  border-left: solid ${BODY_HOUR_BORDER_WIDTH}px
    ${(props) => props.theme.colors.darkGrey};
`;

function CalendarBodyHour() {
  return <Container />;
}

export { CalendarBodyHour };
