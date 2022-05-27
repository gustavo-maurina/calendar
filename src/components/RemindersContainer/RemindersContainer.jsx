import { useState } from "react";

import moment from "moment";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useReminders } from "../../context/RemindersContext";
import { theme } from "../../themes/theme";
import { Reminder } from "../Reminder";
import { RemindersListModal } from "../RemindersListModal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 6px;
`;

const TooManyRemindersChip = styled.div`
  margin-top: 10px;
  background-color: ${theme.labelBgColor};
  font-size: 13px;
  color: white;
  padding: 2px 5px;
  width: 100%;
  &:hover {
    filter: brightness(0.9);
  }
`;

const REMINDER_LIMIT = 3;

export const RemindersContainer = ({ dayInstance }) => {
  const { reminders } = useReminders();
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  let day = moment(dayInstance);

  const remindersOfTheDay = reminders.filter((reminder) =>
    day.isSame(reminder.day, "day")
  );
  const numberOfReminders = remindersOfTheDay.length;

  const closeListModal = () => setIsListModalOpen(false);
  const openListModal = () => setIsListModalOpen(true);

  if (!numberOfReminders) return <></>;

  if (numberOfReminders < REMINDER_LIMIT)
    return (
      <Container>
        {remindersOfTheDay.map((reminder, idx) => (
          <Reminder key={idx} reminder={reminder} />
        ))}
      </Container>
    );

  return (
    <>
      <Reminder reminder={remindersOfTheDay[0]} />
      <TooManyRemindersChip onClick={openListModal}>
        See all reminders ({numberOfReminders})
      </TooManyRemindersChip>

      <RemindersListModal
        isOpen={isListModalOpen}
        closeModal={closeListModal}
        reminders={remindersOfTheDay}
        day={day}
      />
    </>
  );
};

RemindersContainer.propTypes = {
  dayInstance: PropTypes.instanceOf(moment),
};
