import React from "react";
import { DayColumn } from "../../DayColumn";
import { times } from "lodash";
import { CalendarBodyHour } from "./CalendarBodyHour";

function CalendarBodyDay(day) {
  const HOURS_IN_DAY = 24;

  return (
    <DayColumn key={day.date}>
      {times(HOURS_IN_DAY, (index) => (
        <CalendarBodyHour key={index + day.date} />
      ))}
    </DayColumn>
  );
}

export { CalendarBodyDay };
