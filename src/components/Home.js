import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  align-items: center;
`;

const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(46, 48, 145);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 0rem 5rem;
  margin-top: 3rem;
  h3{
    text-align: center;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <TextCtn>
        <h3>
          Beothuk Mechanical Corporation, in Buchans, has an 8000 sq ft facility
          operating as a fully equipped machining, welding & fabrication shop
          that specializes in custom machinin and fabrication production.
        </h3>
      </TextCtn>
    </Wrapper>
  );
};

export default Home;
