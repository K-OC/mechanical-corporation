import React from "react";
import styled from "styled-components";
import gearicon from "../assets/gearicon.png";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  width: 100%;
  gap: 2rem;
  justify-content: top;
  align-items: center;
`;

const TextCtn = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  max-width: 100%;
  width: 70%;
  flex-direction: column;
  color: rgb(46, 48, 145);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  opacity: 0.9;
  white-space: wrap;
  h3 {
    text-align: center;
    @media (max-width: 700px) {
      font-size: 0.8rem;
    }
  }
`;
const OptionsItem = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  background-color: transparent;
  max-width: 33%;
  text-decoration: none;
  justify-content: center;
  p {
    font-size: 1.2rem;
    margin-top: 30%;
    position: absolute;
    font-weight: bold;
    color: rgb(6, 68, 147);
    text-align: center;

    @media (max-width: 8px) {
      font-size: 1.2rem;
    }
    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 700px) {
  }
  &:hover {
    transform: scale(1.02);
  }
  img {
    box-shadow: rgba(0, 0, 0, 0.9) 0px 5px 15px;
    @media (max-width: 900px) {
      max-width: 100%;
    }
  }
`;

const OptionsCtn = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  width: 80%;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: top;
`;

const Home = () => {
  return (
    <Wrapper>
      <TextCtn>
        <h3>
          Beothuk Mechanical Corporation, in Buchans, has an 8000 sq ft facility
          operating as a fully equipped machining, welding & fabrication shop
          that specializes in custom machining and fabrication production.
        </h3>
      </TextCtn>
      <OptionsCtn>
        <OptionsItem to="/services">
          {" "}
          <p>Services</p>
          <img
            src={`${gearicon}`}
            alt="half a yellow gear on a blue background"
          />
        </OptionsItem>
        <OptionsItem to="/equipment">
          {" "}
          <p>Equipment</p>
          <img
            src={`${gearicon}`}
            alt="half a yellow gear on a blue background"
          />
        </OptionsItem>
        <OptionsItem to="/about-us">
          {" "}
          <p>About us</p>
          <img
            src={`${gearicon}`}
            alt="half a yellow gear on a blue background"
          />
        </OptionsItem>
        <OptionsItem to="/contact">
          {" "}
          <p>Contact</p>
          <img
            src={`${gearicon}`}
            alt="half a yellow gear on a blue background"
          />
        </OptionsItem>
      </OptionsCtn>
    </Wrapper>
  );
};

export default Home;
