import React, { useContext } from "react";
import { StateContext } from "../../../../../providers/StateProvider/StateProvider";
import { selectActiveEventsByDay } from "../../../../../providers/StateProvider/selectors/selectActiveEventsByDay";
import { CalendarBodyEvent } from "./CalendarBodyEvent";

function CalendarBodyEventsList({ dayStartTime }) {
  const { state } = useContext(StateContext);
  const events = selectActiveEventsByDay({ dayStartTime: dayStartTime })(state);

  return events.map((event) => (
    <CalendarBodyEvent key={event.id} event={event} />
  ));
}

export { CalendarBodyEventsList };
