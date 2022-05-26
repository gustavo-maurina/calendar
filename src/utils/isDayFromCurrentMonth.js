import moment from "moment";

/**
 * Checks if day is from current month
 * @param {*} day instance of moment.js
 * @returns boolean
 */
export function isDayFromCurrentMonth(day) {
  const startOfMonth = moment()
    .startOf("month")
    .startOf("week")
    .subtract(1, "day");
  const endOfMonth = moment().endOf("month");

  return Boolean(day.isAfter(startOfMonth) && day.isBefore(endOfMonth));
}
