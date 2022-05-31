import { useState } from "react";
import Modal from "react-modal";

import moment from "moment";
import PropTypes from "prop-types";
import styled from "styled-components";

import { DEFAULT_MODAL_STYLE } from "../../constants/defaultModalStyle";
import { useReminders } from "../../context/RemindersContext";
import { Button } from "../shared/Button";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

const customStyles = { content: { ...DEFAULT_MODAL_STYLE, minWidth: "250px" } };

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

export const EditReminderModal = ({ isOpen, closeModal, day, reminder }) => {
  const { editReminder } = useReminders();
  const [reminderDetails, setReminderDetails] = useState(reminder);

  const edit = (e) => {
    e.preventDefault();
    editReminder(reminderDetails);
    closeModal();
  };

  const handleInput = (e) =>
    setReminderDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleDateChange = (e) =>
    setReminderDetails((prevState) => ({
      ...prevState,
      day: moment(e.target.value),
    }));

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <h2>Edit reminder</h2>
      <Form onSubmit={edit}>
        <h3>Date: {day.format("MM/DD/y")}</h3>

        <label htmlFor="text">Reminder text</label>
        <textarea
          required
          name="text"
          type="text"
          maxLength={30}
          placeholder="Type your reminder text..."
          defaultValue={reminderDetails.text}
          onInput={handleInput}
        />

        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          onInput={handleInput}
          defaultValue={reminderDetails.time}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="day"
          onInput={handleDateChange}
          defaultValue={reminderDetails.day.format("y-MM-DD")}
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          onInput={handleInput}
          defaultValue={reminderDetails.city}
          required
        />

        <Button type="submit">Edit</Button>
      </Form>
    </Modal>
  );
};

EditReminderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  reminder: PropTypes.object.isRequired,
  day: PropTypes.instanceOf(moment),
};
