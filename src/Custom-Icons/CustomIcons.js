import styled from "styled-components";
import { ReactComponent as Email } from "./email-svgrepo-com.svg";
import { ReactComponent as Phone } from "./phone-call-svgrepo-com.svg";

export const StyledPhone = styled(Phone)`
  height: 2rem;
  width: 2rem;
  min-height: 1rem;
  min-width: 1rem;
  fill: rgb(46, 48, 145);
`;

export const StyledEmail = styled(Email)`
  height: 2rem;
  width: 2rem;
  fill: rgb(46, 48, 145);
  min-height: 1rem;
  min-width: 1rem;
`;
