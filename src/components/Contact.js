import React from "react";
import styled from "styled-components";
import { StyledEmail, StyledPhone } from "../Custom-Icons/CustomIcons";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  color: rgb(46, 48, 145);
`;
const Heading = styled.h1`
  color: rgb(46, 48, 145);

  font-weight: bold;
  font-size: 2.4rem;
  margin-right: 10px;
  white-space: nowrap;
  @media (max-width: 700px) {
    font-size: 1.9rem;
  }
`;

const ContactCtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.9rem;
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
  text-align: center;
  padding: 1.5rem;
  align-items: center;
  background-color: #fff;
  gap: 1rem;
  max-width: 100%;
  width: 40%;
  justify-content: center;
  word-wrap: break-word;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 1000px) {
    width: 90%;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    white-space: nowrap;
    line-height: 0.5rem;
    @media (max-width: 800px) {
      font-size: 12px;
      line-height: 0.3rem;
    }
  }
  h2 {
    white-space: nowrap;
    font-size: 1.3rem;
    text-align: left;
    width: 50%;
    @media (max-width: 800px) {
      font-size: 1.1rem;
    }
  }
  ${ContactItemInnerCtn} {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    text-align: left;
    white-space: nowrap;
    justify-content: center;

    width: 50%;
    @media (max-width: 800px) {
      font-size: 12px;
      gap: 0.4rem;
    }
    ${ContactLink} {
      gap: 5%;
    }
  }
`;

const AddrCtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Heading>Get in touch</Heading>
      <ContactCtn>
        <ContactItem>
          <AddrCtn>
            <h2>John (Jack) Galvine</h2>
            <p>BMC President</p>
            <p>P.O Box 468</p>
            <p>42 East Street</p>
            <p>Buchans, NL A0H 1GO</p>
          </AddrCtn>
          <ContactItemInnerCtn>
            {" "}
            <ContactLink href="mailto:jpgalvine@gmail.com">
              <StyledEmail /> jpgalvine@gmail.com
            </ContactLink>
            <ContactLink href="tel:709-222-4394">
              <StyledPhone /> 709-222-4394
            </ContactLink>
          </ContactItemInnerCtn>
        </ContactItem>
        <ContactItem>
          <AddrCtn>
            <h2>Rick Brace</h2>
            <p>BMC General Manager</p>
            <p>P.O Box 244</p>
            <p>1 Sleepy Valley</p>
            <p>Buchans, NL A0H 1G0</p>
          </AddrCtn>
          <ContactItemInnerCtn>
            {" "}
            <ContactLink href="mailto:r_brace@hotmail.com">
              <StyledEmail /> r_brace@hotmail.com
            </ContactLink>
            <ContactLink href="tel:709-572-0308">
              {" "}
              <StyledPhone /> 709-572-0308
            </ContactLink>
          </ContactItemInnerCtn>
        </ContactItem>
      </ContactCtn>
    </Wrapper>
  );
};

export default Contact;
