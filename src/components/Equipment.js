import React from "react";
import styled from "styled-components";
import Brake from "../assets/250-ton-brake.png";
import BitSharpener from "../assets/IMG_1511.jpg";
import LineBoringTool from "../assets/IMG_1510.jpg";
import ShearMachine from "../assets/IMG-6737.jpg";

const Wrapper = styled.div`
  max-width: 100%;
  overflow-y: auto;
  height: calc(100% - 5rem);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  width: 80%;
  height: 100%;

  background-color: rgb(46, 48, 145);
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
  }
`;
const Title = styled.h2`
  color: yellow;
  margin: 2rem;
  font-size: 2rem;
  max-width: 50%;
  white-space: nowrap;
  max-height: fit-content;
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const Img = styled.img``;
const InnerEquipmentCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: auto;
  flex-shrink: 2;
  ${Title} {
  }
  ${Img} {
    float: left;
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
`;

const Equipment = () => {
  return (
    <Wrapper>
      <InnerCtn>
        <InnerEquipmentCtn>
          <Title>250 Ton Brake</Title>
          <Img src={`${Brake}`} />
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Img src={`${BitSharpener}`} />
          <Title>Bit Sharpener</Title>
        </InnerEquipmentCtn>
        <InnerEquipmentCtn style={{ paddingRight: "1rem" }}>
          <Title>Line Boring Tool</Title>
          <Img src={`${LineBoringTool}`} />
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Img src={`${ShearMachine}`} />
          <Title>LVD Shear Machine</Title>
        </InnerEquipmentCtn>
      </InnerCtn>
    </Wrapper>
  );
};

export default Equipment;
