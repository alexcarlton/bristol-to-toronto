import { DateTime } from "luxon";
function useCurrentWeek() {
  const DAYS_IN_WEEK = 7;
  let daysOfTheWeek = [];

  const firstDayOfWeek = DateTime.local().startOf("week");

  for (let i = 0; i <= DAYS_IN_WEEK - 1; i++) {
    const day = firstDayOfWeek.plus({ day: i });

    daysOfTheWeek.push({
      date: day.toLocaleString({ day: "numeric" }),
      day: day.toLocaleString({ weekday: "long" }),
      startTime: day.startOf("day").toISO(),
      endTime: day.endOf("day").toISO(),
    });
  }

  return daysOfTheWeek;
}

export { useCurrentWeek };
