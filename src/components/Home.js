import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { StyledLargeGear } from "../Custom-Icons/CustomIcons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const TextCtn = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 2rem;
  color: rgb(46, 48, 145);
`;

const OptionsCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: rgb(46, 48, 145);
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(46, 48, 145);
  font-weight: bold;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
`;

const StyledCardMedia = styled(CardMedia)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  svg {
    transition: transform 0.3s ease-out;
  }

  ${StyledCard}:hover & svg,&:active svg  {
    transform: rotate(90deg);
  }
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
        <StyledCard component={Link} to="/services">
          <StyledCardMedia>
            <StyledLargeGear />
          </StyledCardMedia>
          <StyledCardContent>
            <Typography variant="h6" fontWeight="bold">
              Services
            </Typography>
            <Typography variant="body2">
              Beothuk Mechanical Corporation offers a range of services
              including precision machining and hydraulic hoses & fittings.
            </Typography>
          </StyledCardContent>
        </StyledCard>
        <StyledCard component={Link} to="/equipment">
          <StyledCardMedia>
            <StyledLargeGear />
          </StyledCardMedia>
          <StyledCardContent>
            <Typography variant="h6" fontWeight="bold">
              Equipment
            </Typography>
            <Typography variant="body2">
              The Beothuk Mechanical Corporation's equipment includes a Bit
              Sharpener and a Lathe, among other high-quality machines.
            </Typography>
          </StyledCardContent>
        </StyledCard>
        <StyledCard component={Link} to="/about-us">
          <StyledCardMedia>
            <StyledLargeGear />
          </StyledCardMedia>
          <StyledCardContent>
            <Typography variant="h6" fontWeight="bold">
              About
            </Typography>
            <Typography variant="body2">
              Our Misson, Vision, and Values.
            </Typography>
          </StyledCardContent>
        </StyledCard>
        <StyledCard component={Link} to="/contact">
          <StyledCardMedia>
            <StyledLargeGear />
          </StyledCardMedia>
          <StyledCardContent>
            <Typography variant="h6" fontWeight="bold">
              Contact
            </Typography>
            <Typography variant="body2"></Typography>
          </StyledCardContent>
        </StyledCard>
      </OptionsCtn>
    </Wrapper>
  );
};

export default Home;
