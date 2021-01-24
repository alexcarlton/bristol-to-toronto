import React from "react";
import { DateTime } from "luxon";
import styled from "styled-components";
import { MINUTE_HEIGHT } from "../CalendarBodyHour";

const Container = styled.div`
  position: absolute;

  height: ${(props) => props.height}px;
  width: 90%;

  background: ${(props) => props.theme.colors.green};
`;

function CalendarBodyEvent({ event }) {
  const eventStart = DateTime.fromISO(event.start);
  const eventEnd = DateTime.fromISO(event.end);

  const eventDurationDiff = eventEnd.diff(eventStart, "minutes");
  const { minutes: eventMinuteDuration } = eventDurationDiff.toObject();

  return (
    <Container height={eventMinuteDuration * MINUTE_HEIGHT}>event</Container>
  );
}

export { CalendarBodyEvent };
