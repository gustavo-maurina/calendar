import { createContext, useContext, useState } from "react";

import { v4 as randomUUID } from "uuid";

const RemindersContext = createContext(null);

export const RemindersProvider = ({ children }) => {
  const [reminders, setReminders] = useState([]);

  function addReminder(reminder) {
    const newReminder = { id: randomUUID(), ...reminder };
    setReminders((prevState) => [...prevState, newReminder]);
  }

  function editReminder(newReminder) {
    const reminderToEdit = reminders.find(
      (reminder) => reminder.id === newReminder.id
    );

    const remindersAuxArray = reminders;
    remindersAuxArray.splice(reminders.indexOf(reminderToEdit), 1, newReminder);
    setReminders([...remindersAuxArray]);
  }

  function removeReminder(reminderId) {
    const reminderToRemove = reminders.find(
      (reminder) => reminder.id === reminderId
    );

    const remindersAuxArray = reminders;
    remindersAuxArray.splice(reminders.indexOf(reminderToRemove), 1);
    setReminders([...remindersAuxArray]);
  }

  return (
    <RemindersContext.Provider
      value={{ reminders, addReminder, editReminder, removeReminder }}
    >
      {children}
    </RemindersContext.Provider>
  );
};

export const useReminders = () => useContext(RemindersContext);
