import React from "react";
import styled from "styled-components";
import { StyledEmail, StyledPhone } from "../Custom-Icons/CustomIcons";

const Wrapper = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgb(46, 48, 145);

`;
const Heading = styled.h1`
  color: rgb(46, 48, 145);
  font-weight: bold;
  font-size: 40px;
  white-space: nowrap;

`;

const ContactCtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ContactItemInnerCtn = styled.div``;

const ContactLink = styled.a`
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  color: rgb(46, 48, 145);
  width: 100%;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  padding: 10%;
  width: 33%;
  p {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    word-wrap: break-word;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
  h2{
    white-space: nowrap;

  }
  ${ContactItemInnerCtn} {
    display: flex;
    gap: 1rem;
    align-items: center;
    white-space: nowrap;

    justify-content: space-evenly;
    width: 100%;
    @media (max-width: 800px) {
      font-size: 12px;
      gap: 0.4rem;
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <Heading>Contact Us</Heading>
      <ContactCtn>
        <ContactItem>
          <h2>John (Jack) Galvine</h2>
          <p>BMC President</p>
          <p>P.O Box 468</p>
          <p>42 East Street</p>
          <p>Buchans, NL A0H 1GO</p>
          <ContactItemInnerCtn>
            {" "}
            <StyledEmail />{" "}
            <ContactLink href="mailto:jpgalvine@gmail.com">
              jpgalvine@gmail.com
            </ContactLink>
          </ContactItemInnerCtn>
          <ContactItemInnerCtn>
            <StyledPhone />{" "}
            <ContactLink href="tel:709-222-4394">709-222-4394</ContactLink>
          </ContactItemInnerCtn>
        </ContactItem>
        <ContactItem>
          <h2>Rick Brace</h2>
          <p>BMC General Manager</p>
          <p>P.O Box 244</p>
          <p>1 Sleepy Valley</p>
          <p>Buchans, NL A0H 1G0</p>
          <ContactItemInnerCtn>
            {" "}
            <StyledEmail />{" "}
            <ContactLink href="mailto:r_brace@hotmail.com">
              r_brace@hotmail.com
            </ContactLink>
          </ContactItemInnerCtn>
          <ContactItemInnerCtn>
            <StyledPhone />{" "}
            <ContactLink href="tel:709-572-0308">709-572-0308</ContactLink>
          </ContactItemInnerCtn>
        </ContactItem>
      </ContactCtn>
    </Wrapper>
  );
};

export default Contact;
