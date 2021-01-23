import { useEffect, useState } from "react";
import { DateTime } from "luxon";

function useCurrentWeek() {
  const [daysOfWeek, setDaysOfWeek] = useState(null);

  const DAYS_IN_WEEK = 7;

  useEffect(() => {
    let days = [];

    const currentDay = DateTime.local();
    const firstDayOfWeek = currentDay.startOf("week");

    for (let i = 0; i <= DAYS_IN_WEEK - 1; i++) {
      const day = firstDayOfWeek.plus({ day: i });
      const isCurrentDay = day.hasSame(currentDay, "day");

      days.push({
        date: day.toLocaleString({ day: "numeric" }),
        day: day.toLocaleString({ weekday: "long" }),
        startTime: day.startOf("day").toISO(),
        endTime: day.endOf("day").toISO(),
        isCurrentDay,
      });
    }

    setDaysOfWeek(days);
  }, []);

  return daysOfWeek;
}

export { useCurrentWeek };
