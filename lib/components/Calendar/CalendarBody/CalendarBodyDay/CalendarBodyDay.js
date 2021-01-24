import React, { useContext } from "react";
import { DayColumn } from "../../DayColumn";
import { times } from "lodash";
import { CalendarBodyHour } from "./CalendarBodyHour";
import { StateContext } from "../../../../providers/StateProvider/StateProvider";
import { selectActiveEventsByDay } from "../../../../providers/StateProvider/selectors/selectActiveEventsByDay";

const HOURS_IN_DAY = 24;

function CalendarBodyDay({ day }) {
  const { state } = useContext(StateContext);
  const events = selectActiveEventsByDay({ dayStartTime: day.startTime })(
    state
  );

  console.log(events);

  return (
    <DayColumn key={day.date}>
      {times(HOURS_IN_DAY, (index) => (
        <CalendarBodyHour key={`${index}-${day.date}`} />
      ))}
    </DayColumn>
  );
}

export { CalendarBodyDay };
