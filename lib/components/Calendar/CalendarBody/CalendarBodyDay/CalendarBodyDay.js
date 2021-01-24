import React from "react";
import { DayColumn } from "../../DayColumn";
import { times } from "lodash";
import { CalendarBodyHour } from "./CalendarBodyHour";
import { CalendarBodyEventsList } from "./CalendarBodyEventsList/CalendarBodyEventsList";

const HOURS_IN_DAY = 24;

function CalendarBodyDay({ day }) {
  return (
    <DayColumn key={day.date}>
      <CalendarBodyEventsList dayStartTime={day.startTime} />
      {times(HOURS_IN_DAY, (index) => (
        <CalendarBodyHour key={`${index}-${day.date}`} />
      ))}
    </DayColumn>
  );
}

export { CalendarBodyDay };
