import React from "react";
import styled from "styled-components";
import { StyledEmail, StyledPhone } from "../Custom-Icons/CustomIcons";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgb(46, 48, 145);
  margin-bottom: 10rem;
`;
const Heading = styled.h1`
  color: rgb(46, 48, 145);
  background-color: #fff;
  padding: .6rem 1rem;
  font-weight: bold;
  font-size: 40px;
  margin-right: 10px;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ContactCtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ContactItemInnerCtn = styled.div``;

const ContactLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  color: rgb(46, 48, 145);
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #fff;
  max-width: 100%;
  width: 33%;
  justify-content: center;
  word-wrap: break-word;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 1000px) {
    width: 70%;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    line-height: .5rem;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
  h2 {
    white-space: nowrap;
    @media (max-width: 800px) {
      font-size: 1.1rem;
    }
  }
  ${ContactItemInnerCtn} {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    text-align: left;
    white-space: nowrap;
    justify-content: center;
    width: 100%;
    @media (max-width: 800px) {
      font-size: 12px;
      gap: 0.4rem;
    }
    ${ContactLink} {
   padding: 10px;
    }

  }

`;

const Contact = () => {
  return (
    <Wrapper>
      <Heading>Get in touch</Heading>
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