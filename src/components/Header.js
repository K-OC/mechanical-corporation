import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background-color: rgb(46, 48, 145);
  height: 5.5rem;
  justify-content: space-between;
  align-items: center;

`;

const Logo = styled.img`
  display: block;
  max-width: 20rem;
  max-height: 10rem;
  width: auto;
  height: 5rem;
  padding: 4px;
  @media(max-width:380px){
    height: 3.1rem;
  }
`;
const HeaderItemCtn = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const HeaderItem = styled.button`
  height: fit-content;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: #fff;
  @media(max-width:380px){
    font-size: .8rem;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src="./assets/bmechlogo.png" />
      </Link>
      <HeaderItemCtn>
        <HeaderItem>Equipment</HeaderItem>
        <HeaderItem>Services</HeaderItem>
        <HeaderItem>
          <NavbarLink to="contact">Contact</NavbarLink>
        </HeaderItem>
      </HeaderItemCtn>
    </Wrapper>
  );
};

export default Header;
