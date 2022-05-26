import { useState } from "react";
import Modal from "react-modal";

import styled from "styled-components";

import { DEFAULT_MODAL_STYLE } from "../../constants/defaultModalStyle";
import { theme } from "../../themes/theme";
import { EditReminderModal } from "../EditReminderModal/EditReminderModal";

const modalStyles = { content: { ...DEFAULT_MODAL_STYLE } };

const EditButton = styled.button`
  margin-top: 20px;
  border: none;
  height: 30px;
  background-color: ${theme.labelBgColor};
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const ReminderDetailsModal = ({ reminder, isOpen, closeModal }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const openEditModal = () => {
    closeModal();
    setEditModalOpen(true);
  };
  const closeEditModal = () => setEditModalOpen(false);

  return (
    <>
      <Modal style={modalStyles} isOpen={isOpen} onRequestClose={closeModal}>
        <h1>Reminder details</h1>
        <br />
        <p>
          <strong>Date</strong>: {reminder.day.format("MM/DD/y")}
        </p>
        <p>
          <strong>Time</strong>: {reminder.time}
        </p>
        <p>
          <strong>Text</strong>: {reminder.text}
        </p>
        <p>
          <strong>City</strong>: {reminder.city}
        </p>

        <EditButton onClick={openEditModal}>Edit reminder</EditButton>
        <EditButton onClick={openEditModal}>Edit reminder</EditButton>
      </Modal>

      <EditReminderModal
        reminder={reminder}
        isOpen={editModalOpen}
        closeModal={closeEditModal}
        day={reminder.day}
      />
    </>
  );
};
