import { useEffect, useState } from "react";
import Modal from "react-modal";

import moment from "moment";
import PropTypes from "prop-types";
import styled from "styled-components";

import { DEFAULT_MODAL_STYLE } from "../../constants/defaultModalStyle";
import { useReminders } from "../../context/RemindersContext";
import { isDayOnNext7Days } from "../../utils/isDayOnNext7Days";
import { EditReminderModal } from "../EditReminderModal/EditReminderModal";
import { ReminderWeather } from "../ReminderWeather";
import { Button } from "../shared/Button";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const modalStyles = { content: { ...DEFAULT_MODAL_STYLE } };

export const ReminderDetailsModal = ({ reminder, isOpen, closeModal }) => {
  const { removeReminder } = useReminders();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isWithinOneWeek, setIsWithinOneWeek] = useState();

  useEffect(() => {
    if (isWithinOneWeek === undefined) {
      if (isDayOnNext7Days(reminder.day)) return setIsWithinOneWeek(true);
      setIsWithinOneWeek(false);
    }
  }, [reminder.day, isWithinOneWeek]);

  const closeEditModal = () => setEditModalOpen(false);

  const openEditModal = () => {
    closeModal();
    setEditModalOpen(true);
  };

  const deleteReminder = () => {
    removeReminder(reminder.id);
    setEditModalOpen(false);
  };

  return (
    <>
      <Modal style={modalStyles} isOpen={isOpen} onRequestClose={closeModal}>
        <h1>Reminder details</h1>
        <br />
        <p>
          <strong>Date</strong>: {reminder.day.format("MM/DD/y")}
        </p>
        <p>
          <strong>Time</strong>:{" "}
          {moment(reminder.time, "HH:mm").format("h:mm A")}
        </p>
        <p>
          <strong>Text</strong>: {reminder.text}
        </p>
        <p>
          <strong>City</strong>: {reminder.city}
        </p>
        <p>
          <strong>Weather</strong>:{" "}
          {isOpen && (
            <ReminderWeather
              city={reminder.city}
              isWithinOneWeek={isWithinOneWeek}
            />
          )}
        </p>
        <br />
        <ButtonsContainer>
          <Button onClick={openEditModal}>Edit reminder</Button>
          <Button color="#ff6060" onClick={deleteReminder}>
            Remove reminder
          </Button>
        </ButtonsContainer>
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

EditReminderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  reminder: PropTypes.object.isRequired,
};
