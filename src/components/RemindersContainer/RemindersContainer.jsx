import moment from "moment";
import styled from "styled-components";

import { useReminders } from "../../context/RemindersContext";
import { Reminder } from "../Reminder";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 6px;
`;

export const RemindersContainer = ({ dayInstance }) => {
  const { reminders } = useReminders();
  let day = moment(dayInstance);

  const remindersOfTheDay = reminders.filter((reminder) =>
    day.isSame(reminder.day, "day")
  );

  if (!remindersOfTheDay.length) return <></>;

  return (
    <Container>
      {remindersOfTheDay.map((reminder, idx) => (
        <Reminder key={idx} reminder={reminder} />
      ))}
    </Container>
  );
};
