import React from "react";
import { DateTime } from "luxon";
import styled from "styled-components";
import { MINUTE_HEIGHT } from "../../CalendarBodyHour";
import { CalendarBodyEventTime } from "./CalendarBodyEventTime";

const Container = styled.div`
  position: absolute;

  top: ${(props) => props.top}px;

  height: ${(props) => props.height}px;
  width: 90%;

  background: ${(props) => props.theme.colors.green};

  border-radius: 5px;
`;

const EventSummaryText = styled.p``;

function CalendarBodyEvent({ event, dayStartTime }) {
  const dayStart = DateTime.fromISO(dayStartTime);
  const eventStart = DateTime.fromISO(event.start);
  const eventEnd = DateTime.fromISO(event.end);

  const eventDurationDiff = eventEnd.diff(eventStart, "minutes");
  const { minutes: eventMinuteDuration } = eventDurationDiff.toObject();

  const eventStartTimeDiff = eventStart.diff(dayStart, "minutes");
  const {
    minutes: minutesFromStartOfDayToEventStart,
  } = eventStartTimeDiff.toObject();

  return (
    <Container
      top={minutesFromStartOfDayToEventStart * MINUTE_HEIGHT}
      height={eventMinuteDuration * MINUTE_HEIGHT}
    >
      <EventSummaryText>{event.summary}</EventSummaryText>
      <CalendarBodyEventTime eventStart={eventStart} eventEnd={eventEnd} />
    </Container>
  );
}

export { CalendarBodyEvent };
