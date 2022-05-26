import moment from "moment";

import { isDayFromCurrentMonth } from "./isDayFromCurrentMonth";
import { isWeekendDay } from "./isWeekendDay";

export function getDayContext(dayInstance) {
  let day = moment(dayInstance);
  let isWeekend = isWeekendDay(day);
  let isFromCurrentMonth = isDayFromCurrentMonth(day);
  let isToday = moment(day).isSame(moment(), "day");

  return { day, isWeekend, isFromCurrentMonth, isToday };
}
