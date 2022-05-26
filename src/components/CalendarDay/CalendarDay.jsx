import { memo, useState } from "react";

import styled from "styled-components";

import { theme } from "../../themes/theme";
import { getDayContext } from "../../utils/getDayProps";
import { AddReminderModal } from "../AddReminderModal/AddReminderModal";
import { RemindersContainer } from "../RemindersContainer";

const Container = styled.div`
  cursor: pointer;
  border: 1px solid black;
  margin: 0 -1px -1px 0;
  height: 120px;
  padding: 5px;
  background-color: ${(props) =>
    props.isWeekend ? theme.weekendBgColor : theme.dayBgColor};
`;

const DayText = styled.span`
  color: ${(props) =>
    props.isWeekend && props.fromCurrentMonth ? theme.weekendDayColor : "#222"};
  font-size: 1.3rem;
  font-weight: ${(props) => (props.fromCurrentMonth ? "bold" : "normal")};
`;

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
      <Container
        isToday={isToday}
        isWeekend={isWeekend}
        onClick={openAddReminderModal}
      >
        <div>
          <DayText isWeekend={isWeekend} fromCurrentMonth={isFromCurrentMonth}>
            {day.format("D")}
          </DayText>
        </div>

        <RemindersContainer dayInstance={dayInstance} />
      </Container>

      <AddReminderModal
        isOpen={modalOpened}
        closeModal={closeModal}
        day={dayInstance}
      />
    </>
  );
};

export const CalendarDay = memo(CalendarDayComponent);
