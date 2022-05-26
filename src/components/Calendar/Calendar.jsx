import styled from "styled-components";

import { useCalendar } from "../../context/CalendarContext";
import { CalendarWeekdayLabels } from "../CalendarWeekdayLabels";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 140px);
`;

export const Calendar = () => {
  const { calendar } = useCalendar();

  if (!calendar) return <span>Creating calendar...</span>;

  return (
    <Container>
      <h4>
        Click on the days to add reminders! You can get details and edit them
        too!
      </h4>
      <div>
        <CalendarWeekdayLabels />
        <CalendarGrid>{calendar}</CalendarGrid>
      </div>
    </Container>
  );
};
