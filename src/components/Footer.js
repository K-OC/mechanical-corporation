import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  background-color: #fffaf0;
  bottom: 0;
  position: relative;
  width: 100%;
  max-width: 100%;
`;
const FooterItemCtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5rem;
  font-size: 1.3rem;
`;

const StyledLink = styled(Link)`
  color: rgb(46, 48, 145);
  text-decoration: none;
`;
const Footer = () => {
  return (
    <Wrapper>
      <FooterItemCtn>
        <StyledLink to="/about-us">About Us</StyledLink>
        <StyledLink to="/equipment">Equipment</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </FooterItemCtn>
    </Wrapper>
  );
};

export default Footer;
