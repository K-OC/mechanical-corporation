import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import {
  StyledGearSmall,
  DrillSmall,
  PhoneSmall,
} from "../Custom-Icons/CustomIcons";
const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  background-color: rgb(46, 48, 145);
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  max-width: 20rem;
  max-height: 10rem;
  width: auto;
  height: 5rem;
  padding: 4px;
  @media (max-width: 380px) {
    height: 3.1rem;
  }
`;
const HeaderItemCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fffaf0;
  &:hover {
    color: yellow;
  }
`;

const HeaderItem = styled.button`
  height: fit-content;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  color: #fffaf0;
  padding: 0 1rem;
  @media (max-width: 380px) {
    font-size: 0.8rem;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const Header = () => {
  const menuArr = [
    { title: "Equipment", src: <DrillSmall /> },
    { title: "Services", src: <StyledGearSmall /> },
    { title: "Contact", src: <PhoneSmall /> },
  ];
  return (
    <Wrapper>
      <Link to="/">
        <Logo src="./assets/bmechlogo.png" />
      </Link>

      <HeaderItemCtn>
        <Dropdown content={menuArr} />

        <HeaderItem>
          <NavbarLink to="equipment">Equipment</NavbarLink>
        </HeaderItem>
        <HeaderItem>
          <NavbarLink to="services">Services</NavbarLink>
        </HeaderItem>
        <HeaderItem>
          <NavbarLink to="contact">Contact</NavbarLink>
        </HeaderItem>
      </HeaderItemCtn>
    </Wrapper>
  );
};

export default Header;
