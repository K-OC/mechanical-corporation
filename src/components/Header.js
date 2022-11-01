import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #0d47a1;
  height: 5.5rem; 
  justify-content: space-between; 
`;

const Logo = styled.img`
  display: block;
  max-width: 20rem;
  max-height: 10rem;
 width: auto;
 height: auto;
 padding: 4px;
`;
const HeaderItemCtn = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderItem = styled.button`
height: fit-content;
border: none;
background-color: transparent;
font-size: 16px;
color: #fff;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo src="./assets/bmechlogo.png" />
      <HeaderItemCtn>
        <HeaderItem>Contacts</HeaderItem>
        <HeaderItem>Products</HeaderItem>
        <HeaderItem>Services</HeaderItem>
      </HeaderItemCtn>
    </Wrapper>
  );
};

export default Header;
