import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: rgb(46, 48, 145);
  height: 5.5rem;
  justify-content: space-between;
`;

const Logo = styled.img`
  display: block;
  max-width: 20rem;
  max-height: 10rem;
  width: 9.5rem;
  height: 5rem;
  padding: 4px;
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
  font-size: 16px;
  color: #fff;
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/" exact>
        <Logo src="./assets/bmechlogo.png" />
      </Link>
      <HeaderItemCtn>
        <HeaderItem>
          <NavbarLink to="contact">Contact</NavbarLink>
        </HeaderItem>
        <HeaderItem>Products</HeaderItem>
        <HeaderItem>Services</HeaderItem>
      </HeaderItemCtn>
    </Wrapper>
  );
};

export default Header;
