import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow-y: scroll;
  width: 70%;
  overflow-x: hidden;
  height: 70%;
  display: flex;
  align-items: center;
  @media (max-width: 380px) {
    height: calc(100% - 6rem);
    width: 100%;
  }
`;
const PageTitle = styled.h2`
  color: rgb(46, 48, 145);
  font-size: 1.5rem;
  @media (max-width: 1200px) {
    font-size: 1rem;
  }

`
const InnerCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  jusitify-content: center;
  overflow-wrap: break-word;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1em;
  height: 3rem;
  width: 5rem;
  padding: 1rem;
  text-align: left;
  display: flex; /* added this line*/
  align-items: center;
  jusitify-content: center;
  background-color: rgb(46, 48, 145);
  width: 50%;
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const Services = () => {
  return (
    <Wrapper>
      <InnerCtn>
        <PageTitle>Products & Services</PageTitle>
        <InnerCtn>
          <Title>Bit sharpening</Title>
          <Title> Bucket Rebuilds</Title>
          <Title> Drill Consumable Products</Title>
          <Title> Drill Hammer Rebuilds</Title>
          <Title> Hydraulic Hoses & Fittings</Title>
          <Title> Laser Alignment</Title>
          <Title> Line Boring</Title>
          <Title> Mobile Welding & Mechanical Maintenance</Title>
          <Title> Precision Machining</Title>
          <Title> Truck Box Liners (Hardox)</Title>
          <Title> Welding and Fabrication</Title>
        </InnerCtn>
      </InnerCtn>
    </Wrapper>
  );
};

export default Services;
