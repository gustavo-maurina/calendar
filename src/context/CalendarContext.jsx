import { createContext, useContext, useEffect, useState } from "react";

import moment from "moment";

import { getCalendarDays } from "../utils/getCalendarDays";

const CalendarContext = createContext(null);

export const CalendarProvider = ({ children }) => {
  const [calendar, setCalendar] = useState();
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [currentCity, setCurrentCity] = useState("New York");

  useEffect(() => {
    const calendarDaysGrid = getCalendarDays(currentMonth);
    setCalendar(calendarDaysGrid);
  }, [currentMonth]);

  return (
    <CalendarContext.Provider
      value={{
        calendar,
        setCalendar,
        currentMonth,
        setCurrentMonth,
        currentCity,
        setCurrentCity,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
