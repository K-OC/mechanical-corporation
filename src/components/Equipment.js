import React from "react";
import styled from "styled-components";
import Brake from "../assets/250-ton-brake.png";
import BitSharpener from "../assets/IMG_1511.jpg";
import LineBoringTool from "../assets/IMG_1510.jpg";
import ShearMachine from "../assets/IMG-6737.jpg";
import universalMillingMachine from "../assets/universal-milling-machine.png";
import hydraulicBendingRolls from "../assets/IMG-6771.jpg";
import lathe from "../assets/IMG-6755.jpg";
import turningCenter from "../assets/IMG-6773.jpg";
import radialDrill from "../assets/radial-drill.jpg";
const Wrapper = styled.div`
  max-width: 100%;
  overflow-y: auto;
  height: calc(100% - 5rem);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 380px) {
    height: calc(100% - 6rem);
  }
`;

const InnerCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  overflow-y: scroll;
  width: 50%;
  height: 100%;
  gap: 1rem;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
  }
`;
const Title = styled.h2`
  color: yellow;
  margin: 2rem;
  font-size: 2rem;
  max-width: 40%;
  max-height: fit-content;
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const Img = styled.img``;
const InnerEquipmentCtn = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(46, 48, 145);
  justify-content: space-between;
  max-width: 90%;
  width: 90%;
  height: auto;
  border: 1px solid rgb(46, 48, 145);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-shrink: 2;
  ${Title} {
  }
  ${Img} {
    float: left;
    width: 50%;
    object-fit: cover;
    margin: 1rem;
  }
`;

const Equipment = () => {
  return (
    <Wrapper>
      <InnerCtn>
        <Title style={{ color: "rgb(46, 48, 145)" }}>Equipment</Title>
        <InnerEquipmentCtn>
          <Title>250 Ton Brake</Title>
          <Img src={`${Brake}`} />
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Img src={`${BitSharpener}`} />
          <Title>Bit Sharpener</Title>
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Title>Line Boring Tool</Title>
          <Img src={`${LineBoringTool}`} />
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Img src={`${ShearMachine}`} />
          <Title>LVD Shear Machine</Title>
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Title>Universal Milling Machine</Title>
          <Img src={`${universalMillingMachine}`} />
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Img src={`${hydraulicBendingRolls}`} />
          <Title>Hydraulic Bending Rolls</Title>
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Title>Lathe</Title>

          <Img src={`${lathe}`} />
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Img src={`${turningCenter}`} />
          <Title>Turning Center</Title>
        </InnerEquipmentCtn>
        <InnerEquipmentCtn>
          <Title>Radial Drill</Title>
          <Img src={`${radialDrill}`} />
        </InnerEquipmentCtn>
      </InnerCtn>
    </Wrapper>
  );
};

export default Equipment;
