import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
  }
`;

const Title = styled.h2`
  color: rgb(46, 48, 145);
`;
const ContentCtn = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 50%;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
  }
  ul {
    color: rgb(46, 48, 145);
    font-weight: bold;
  }
`;

const Services = () => {
  return (
    <Wrapper>
      <Title>Products & Services</Title>
      <ContentCtn>
        <ul>
          <li>One</li>
          <li>One</li>
          <li>One</li>
        </ul>
      </ContentCtn>
    </Wrapper>
  );
};

export default Services;
