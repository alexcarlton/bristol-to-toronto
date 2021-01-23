import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 5rem;
  border: solid 1px ${(props) => props.theme.colors.darkGrey};
`;

function CalendarBodyHour() {
  return <Container />;
}

export { CalendarBodyHour };
