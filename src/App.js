import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import gearphoto from "./assets/gearphoto.png";
import Equipment from "./components/Equipment";
const Wrapper = styled.div`
  display: flex;
  top: 5.5rem;
  position: fixed;
  align-items: top;
  justify-content: center;
  background-color: #fff;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background: url(${gearphoto});
  background-repeat: no-repeat;
  background-size: 100%;
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
          <Route path="about-us" element={<AboutUs />} />
          <Route path="equipment" element={<Equipment />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
