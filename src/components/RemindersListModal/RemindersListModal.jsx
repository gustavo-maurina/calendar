import Modal from "react-modal";

import moment from "moment";
import PropTypes from "prop-types";
import styled from "styled-components";

import { DEFAULT_MODAL_STYLE } from "../../constants/defaultModalStyle";
import { Button } from "../shared/Button";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

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

export const RemindersListModal = ({ isOpen, closeModal, reminders, day }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <h2>Reminders for {day.format("MM/DD/y")}:</h2>
      <RemindersList>
        {reminders.map((reminder) => (
          <li>
            {reminder.text} <Button>Details</Button>
          </li>
        ))}
      </RemindersList>
    </Modal>
  );
};

RemindersList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  reminder: PropTypes.object.isRequired,
  day: PropTypes.instanceOf(moment),
};
