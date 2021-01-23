import React from "react";
import { DayColumn } from "../../DayColumn";
import { times } from "lodash";
import { Hour } from "./Hour";

function Day(day) {
  const HOURS_IN_DAY = 24;

  return (
    <DayColumn key={day.date}>
      {times(HOURS_IN_DAY, (index) => (
        <Hour key={index + day.date} />
      ))}
    </DayColumn>
  );
}

export { Day };
