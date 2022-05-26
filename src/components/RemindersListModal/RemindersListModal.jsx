import Modal from "react-modal";

import styled from "styled-components";

import { DEFAULT_MODAL_STYLE } from "../../constants/defaultModalStyle";
import { theme } from "../../themes/theme";

Modal.setAppElement("#root");

const customStyles = { content: { ...DEFAULT_MODAL_STYLE, minWidth: "250px" } };

const RemindersList = styled.ul`
  padding: 0px;
  margin-top: 20px;
  list-style: none;

  li {
    margin-bottom: 10px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #0000003f;
  }
`;

const DetailsButton = styled.button`
  border: none;
  background-color: ${theme.labelBgColor};
  color: white;
  border-radius: 5px;
`;

export const RemindersListModal = ({ isOpen, closeModal, reminders, day }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <h2>Reminders for {day.format("MM/DD/y")}:</h2>
      <RemindersList>
        {reminders.map((reminder) => (
          <li>
            {reminder.text} <DetailsButton>Details</DetailsButton>
          </li>
        ))}
      </RemindersList>
    </Modal>
  );
};
