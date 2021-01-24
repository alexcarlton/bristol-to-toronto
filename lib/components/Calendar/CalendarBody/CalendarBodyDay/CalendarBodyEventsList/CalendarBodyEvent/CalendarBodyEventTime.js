import React from "react";
import styled from "styled-components";

const EventTimeText = styled.p``;

const PERIOD_FORMAT = "a";

const MINUTE_FORMAT = "mm";

function CalendarBodyEventTime({ eventStart, eventEnd }) {
  const startAndEndAreSamePeriod =
    eventStart.toFormat(PERIOD_FORMAT) === eventEnd.toFormat(PERIOD_FORMAT);

  const getTimeText = (time, { checkPeriod = true } = {}) => {
    const hasNoMinutes = time.toFormat(MINUTE_FORMAT);

    return time
      .toFormat(
        `h${hasNoMinutes ? "" : ":mm"}${
          checkPeriod && startAndEndAreSamePeriod ? "" : PERIOD_FORMAT
        }`
      )
      .toLowerCase();
  };

  return (
    <EventTimeText>
      {getTimeText(eventStart)}-{getTimeText(eventEnd, { checkPeriod: false })}
    </EventTimeText>
  );
}

export { CalendarBodyEventTime };