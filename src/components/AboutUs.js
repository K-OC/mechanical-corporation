import React, { useState } from "react";
import styled from "styled-components";
import { StyledGear } from "../Custom-Icons/CustomIcons";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5rem;
  justify-content: start;
`;

const CardCtn = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  width: 100%;
  gap: 0.2rem;
  @media (max-width: 700px) {
    min-height: 70rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
`;
const ContentCard = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #fff;
  gap: 0.5rem;
  width: 100%;
  background-color: rgb(46, 48, 145);
  border-bottom: 1px solid rgb(255, 242, 0);
  svg {
    fill: rgb(255, 242, 0);
  }
  @media (max-width: 700px) {
  }
`;

const ContentTitleCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const ContentCardTitle = styled.h2`
  padding: 0.3rem;
  text-align: center;
  color: rgb(255, 242, 0);
`;

const ContentCardParaCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  ul {
    color: yellow;
    width: 80%;
  }
  display: ${(props) => (props.open ? "" : "none")};
`;

const ContentCardPara = styled.p`
  color: rgb(255, 242, 0);
  text-align: left;
  max-width: 80%;
`;
const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState({ value: "" });

  const handleSectionOpen = () => {
    setIsOpen(selectedKey);
  };

  return (
    <Wrapper>
      <CardCtn>
        <ContentCard
          onClick={() => {
            setSelectedKey({ value: "mission" });
            handleSectionOpen();
          }}
        >
          <ContentTitleCtn>
            <StyledGear />
            <ContentCardTitle>Mission</ContentCardTitle>
          </ContentTitleCtn>
          <ContentCardParaCtn
            open={isOpen && selectedKey.value === "mission" ? true : false}
          >
            <ContentCardPara>
              Beothuk Mechanical Corporation [BMC] is committed to providing our
              clients with professional quality machining and welding services
              customized to their needs on-site and in the field. All work shall
              be performed at the highest standard, promoting sage and
              cost-effective work practices.
            </ContentCardPara>
            <ContentCardPara>
              BMC is dedicated to bringing growth and innovation to the local
              economy in which we operate, and adapting to the changing needs of
              our team and clients.
            </ContentCardPara>
            <ContentCardPara>
              BMC is an equal opportunity corporation that encourages and
              actively seeks to build a diverse and invclusive work environment.
            </ContentCardPara>
          </ContentCardParaCtn>
        </ContentCard>
        <ContentCard
          onClick={() => {
            setSelectedKey({ value: "values" });
            handleSectionOpen();
          }}
        >
          <ContentTitleCtn>
            <StyledGear />
            <ContentCardTitle>Our Values</ContentCardTitle>
          </ContentTitleCtn>
          <ContentCardParaCtn
            open={isOpen && selectedKey.value === "values" ? true : false}
          >
            <ContentCardPara>
              Beothuk Mechanical Corporation core values guide and empower our
              inclusive and diverse team as we perform sage, ethical and
              efficient work.
            </ContentCardPara>

            <ul>
              <li>Professionalism</li>
              <li>Safety</li>
              <li>Integrity</li>
              <li>Quality</li>
              <li>Respect</li>
            </ul>
          </ContentCardParaCtn>
        </ContentCard>
        <ContentCard
          onClick={() => {
            setSelectedKey({ value: "vision" });
            handleSectionOpen();
          }}
        >
          <ContentTitleCtn>
            <StyledGear />
            <ContentCardTitle>Vision</ContentCardTitle>
          </ContentTitleCtn>
          <ContentCardParaCtn
            open={isOpen && selectedKey.value === "vision" ? true : false}
          >
            <ContentCardPara>
              To be the leader of the machining, welding, and fabrication
              contracting and service industries through the uitlization of
              safety, training and specialized technology.
            </ContentCardPara>
          </ContentCardParaCtn>
        </ContentCard>
      </CardCtn>
    </Wrapper>
  );
};

export default AboutUs;
