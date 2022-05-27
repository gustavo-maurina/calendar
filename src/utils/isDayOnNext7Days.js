import moment from "moment";

export function isDayOnNext7Days(day) {
  const reminderDay = moment(day);
  const next7days = moment().add(7, "day");
  const yesterday = moment().subtract(1, "day");

  return reminderDay.isBefore(next7days) && reminderDay.isAfter(yesterday);
}
