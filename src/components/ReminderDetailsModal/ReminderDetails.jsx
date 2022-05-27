import { useEffect, useState } from "react";
import Modal from "react-modal";

import moment from "moment";
import PropTypes from "prop-types";

import { DEFAULT_MODAL_STYLE } from "../../constants/defaultModalStyle";
import { getWeather } from "../../services/getWeather";
import { EditReminderModal } from "../EditReminderModal/EditReminderModal";
import { Button } from "../shared/Button";

const modalStyles = { content: { ...DEFAULT_MODAL_STYLE } };

export const ReminderDetailsModal = ({ reminder, isOpen, closeModal }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState();

  useEffect(() => {
    if (isOpen && !weatherForecast) fetchWeatherForecast();

    async function fetchWeatherForecast() {
      const formattedDate = moment(reminder.day).format("yyyy-MM-d");
      const req = await getWeather(reminder.city, formattedDate);
      const forecast = req.data.days[0];
      setWeatherForecast(forecast);
    }
  }, [isOpen, reminder, weatherForecast]);

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
          <strong>Weather</strong>: {weatherForecast.temp}
        </p>
        <br />
        <Button onClick={openEditModal}>Edit reminder</Button>
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
