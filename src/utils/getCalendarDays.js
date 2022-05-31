import moment from "moment";

import { CalendarDay } from "../components/CalendarDay/CalendarDay";

export function getCalendarDays(date) {
  const _date = moment(date).clone();
  const firstDay = _date.clone().startOf("month").startOf("week");
  const lastDay = _date.clone().endOf("month").endOf("week");
  const currentDay = firstDay.clone().subtract(1, "day");
  let grid = [];
  let key = 0;

  while (currentDay.isBefore(lastDay, "day")) {
    const nextDay = currentDay.add(1, "day").clone();

    grid.push(<CalendarDay dayInstance={nextDay} key={key} />);
    key++;
  }

  return grid;
}
