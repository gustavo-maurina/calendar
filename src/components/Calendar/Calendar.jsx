import styled from "styled-components";

import { useCalendar } from "../../context/CalendarContext";
import { CalendarWeekdayLabels } from "../CalendarWeekdayLabels";

const Container = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
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
      <div>
        <CalendarWeekdayLabels />
        <CalendarGrid>{calendar}</CalendarGrid>
      </div>
    </Container>
  );
};
