import { useState } from "react";
import Modal from "react-modal";

import moment from "moment";
import PropTypes from "prop-types";
import styled from "styled-components";

import { DEFAULT_MODAL_STYLE } from "../../constants/defaultModalStyle";
import { useReminders } from "../../context/RemindersContext";
import { Button } from "../shared/Button";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

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
      ariaHideApp={!process.env.NODE_ENV === "test"}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div data-testid="addReminderModal">
        <h2>Add new reminder</h2>
        <Form onSubmit={createReminder}>
          <h3>Date: {day.format("MM/DD/y")}</h3>

          <label htmlFor="text">Reminder text</label>
          <textarea
            required
            maxLength={30}
            name="text"
            type="text"
            placeholder="Type your reminder text..."
            onInput={handleInput}
          />

          <label htmlFor="time">Time</label>
          <input type="time" name="time" onInput={handleInput} required />

          <label htmlFor="city">City</label>
          <input type="text" name="city" onInput={handleInput} required />

          <Button type="submit">Add</Button>
        </Form>
      </div>
    </Modal>
  );
};

AddReminderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  day: PropTypes.instanceOf(moment),
};
