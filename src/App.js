import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Home from "./components/Home";
import gearphoto from "./assets/gearphoto.png";
const Wrapper = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow-x: hidden;
  max-width: 100%;
  
  background:url(${gearphoto}) ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
