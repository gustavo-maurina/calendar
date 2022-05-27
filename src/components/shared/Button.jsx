import styled from "styled-components";

import { theme } from "../../themes/theme";

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.color ?? theme.labelBgColor};
  color: white;
  border-radius: 5px;
  height: 25px;
  cursor: pointer;
`;
/**
 *
 * @param {string} color css compatible string that will become background-color
 * @returns
 */
export const Button = (props) => {
  return <StyledButton {...props} />;
};
