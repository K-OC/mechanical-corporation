import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import gearphoto from "./assets/gearphoto.png";
const Wrapper = styled.div`
  display: flex;
  top: 5.5rem;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background: url(${gearphoto});
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
      <Footer />
    </>
  );
}

export default App;
