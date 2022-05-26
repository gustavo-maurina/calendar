import { useState } from "react";
import Modal from "react-modal";

import moment from "moment";
import PropTypes from "prop-types";
import styled from "styled-components";

import { DEFAULT_MODAL_STYLE } from "../../constants/defaultModalStyle";
import { useReminders } from "../../context/RemindersContext";
import { theme } from "../../themes/theme";

Modal.setAppElement("#root");

const customStyles = { content: { ...DEFAULT_MODAL_STYLE } };

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    font-size: 16px;
    font-weight: bold;
  }
`;

const SubmitButton = styled.button`
  border: none;
  background-color: ${theme.labelBgColor};
  color: white;
  border-radius: 5px;
  height: 25px;
  cursor: pointer;
`;

export const AddReminderModal = ({ isOpen, closeModal, day }) => {
  const { addReminder } = useReminders();
  const [reminderDetails, setReminderDetails] = useState({});

  const createReminder = (e) => {
    e.preventDefault();
    addReminder({ ...reminderDetails, day });
    closeModal();
  };

  const handleInput = (e) =>
    setReminderDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Add new reminder</h2>
      <Form onSubmit={createReminder}>
        <h3>Date: {day.format("MM/DD/y")}</h3>

        <label htmlFor="text">Reminder text</label>
        <textarea
          required
          name="text"
          type="text"
          placeholder="Type your reminder text..."
          onInput={handleInput}
        />

        <label htmlFor="time">Time</label>
        <input type="time" name="time" onInput={handleInput} />

        <SubmitButton type="submit">Add</SubmitButton>
      </Form>
    </Modal>
  );
};

AddReminderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  day: PropTypes.instanceOf(moment),
};
