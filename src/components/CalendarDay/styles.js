import styled from "styled-components";

import { theme } from "../../themes/theme";

export const DayContainer = styled.div`
  cursor: pointer;
  border: 1px solid #0000005a;
  margin: 0 -1px -1px 0;
  height: 110px;
  padding: 5px;
  background-color: ${(props) =>
    props.isWeekend ? theme.weekendBgColor : theme.dayBgColor};
`;

export const DayText = styled.span`
  color: ${(props) =>
    props.isWeekend && props.fromCurrentMonth ? theme.weekendDayColor : "#222"};
  font-size: 1.5rem;
  font-weight: ${(props) => (props.fromCurrentMonth ? "bold" : "normal")};
  pointer-events: none;
`;

export const TodayText = styled.span`
  font-weight: normal;
  margin-left: 5px;
  font-size: 14px;
  border-radius: 5px;
  color: white;
  padding: 1px 5px;
  background-color: #ff5c9e;
`;
