import { memo, useState } from "react";

import moment from "moment";
import PropTypes from "prop-types";

import { getDayContext } from "../../utils/getDayProps";
import { AddReminderModal } from "../AddReminderModal/AddReminderModal";
import { RemindersContainer } from "../RemindersContainer";
import { DayContainer, DayText, TodayText } from "./styles";

const CalendarDayComponent = ({ dayInstance }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const { isToday, day, isFromCurrentMonth, isWeekend } =
    getDayContext(dayInstance);

  const openAddReminderModal = (e) => {
    if (e.currentTarget === e.target) setModalOpened(true);
  };
  const closeModal = () => setModalOpened(false);

  return (
    <>
      <DayContainer isWeekend={isWeekend} onClick={openAddReminderModal}>
        <DayText isWeekend={isWeekend} fromCurrentMonth={isFromCurrentMonth}>
          {day.format("D")}
          {isToday && <TodayText>Today</TodayText>}
        </DayText>

        <RemindersContainer dayInstance={dayInstance} />
      </DayContainer>

      <AddReminderModal
        isOpen={modalOpened}
        closeModal={closeModal}
        day={dayInstance}
      />
    </>
  );
};

export const CalendarDay = memo(CalendarDayComponent);

CalendarDay.propTypes = {
  dayInstance: PropTypes.instanceOf(moment),
};
