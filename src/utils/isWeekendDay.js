import moment from "moment";

/**
 * Checks if day is a weekend day taking locale into consideration
 * @param {*} day instance of moment.js
 * @returns boolean
 */
export function isWeekendDay(day) {
  const momentInstance = moment(day).clone();
  // formatting before because of different behaviors on different locales
  const formattedDay = momentInstance.format("dddd");

  return Boolean(formattedDay === "Sunday" || formattedDay === "Saturday");
}
