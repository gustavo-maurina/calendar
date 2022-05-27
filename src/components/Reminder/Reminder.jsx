import { useState } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "../../themes/theme";
import { ReminderDetailsModal } from "../ReminderDetailsModal/ReminderDetails";

const Container = styled.div`
  background-color: ${theme.reminderBgColor};
  border-radius: 5px;
  font-size: 13px;
  color: white;
  padding: 2px 5px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const Reminder = ({ reminder }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openDetails = (e) => {
    setIsDetailsOpen(true);
    // e.nativeEvent.stopImmediatePropagation();
  };

  const closeModal = () => setIsDetailsOpen(false);

  return (
    <>
      <Container onClick={openDetails}>{reminder.text}</Container>
      <ReminderDetailsModal
        isOpen={isDetailsOpen}
        reminder={reminder}
        closeModal={closeModal}
      />
    </>
  );
};

Reminder.propTypes = {
  reminder: PropTypes.object,
};
