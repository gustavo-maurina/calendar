import Modal from "react-modal";

import { DEFAULT_MODAL_STYLE } from "../../constants/defaultModalStyle";

const modalStyles = { content: { ...DEFAULT_MODAL_STYLE } };

export const ReminderDetailsModal = ({ reminder, isOpen, closeModal }) => {
  return (
    <>
      <Modal style={modalStyles} isOpen={isOpen} onRequestClose={closeModal}>
        <h1>Reminder details</h1>
        <p>Date: {reminder.day.format("MM/DD/y")}</p>
        <p>Time: {reminder.time}</p>
        <p>Text: {reminder.text}</p>
        <p>City: {reminder.city}</p>
      </Modal>
    </>
  );
};
