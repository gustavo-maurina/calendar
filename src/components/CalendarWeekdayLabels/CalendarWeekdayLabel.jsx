import styled from "styled-components";

import { theme } from "../../themes/theme";

const Container = styled.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: ${theme.labelBgColor};
`;

const Label = styled.span`
  text-align: center;
  padding: 5px 0;
  color: white;
  font-weight: bold;
`;

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const CalendarWeekdayLabels = () => {
  return (
    <Container>
      {DAYS_OF_WEEK.map((weekDay, idx) => (
        <Label key={idx}>{weekDay}</Label>
      ))}
    </Container>
  );
};
