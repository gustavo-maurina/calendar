import { createContext, useContext, useState } from "react";

import { useCalendar } from "./CalendarContext";

const RemindersContext = createContext(null);

export const RemindersProvider = ({ children }) => {
  const { currentCity } = useCalendar();
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    const newReminder = { ...reminder, city: currentCity };
    setReminders((prevState) => [...prevState, newReminder]);
  };

  return (
    <RemindersContext.Provider value={{ reminders, addReminder }}>
      {children}
    </RemindersContext.Provider>
  );
};

export const useReminders = () => useContext(RemindersContext);
