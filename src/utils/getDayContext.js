import moment from "moment";

import { isDayFromCurrentMonth } from "./isDayFromCurrentMonth";
import { isWeekendDay } from "./isWeekendDay";

export function getDayContext(dayInstance) {
  const day = moment(dayInstance);
  const isWeekend = isWeekendDay(day);
  const isFromCurrentMonth = isDayFromCurrentMonth(day);
  const isToday = moment(day).isSame(moment(), "day");

  return { day, isWeekend, isFromCurrentMonth, isToday };
}
