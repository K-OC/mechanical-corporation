import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Contacts2 from "./components/Contacts2";
import Home from "./components/Home";
import AboutUs2 from "./components/AboutUs2";
import Footer from "./components/Footer";
import gearphoto from "./assets/gearphoto.png";
import Equipment2 from "./components/Equipment2";
import Services2 from "./components/Services2";

const Wrapper = styled.div`
  top: 5.5rem;
  position: relative;
  background-color: #fff;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 5.5rem - 5.5rem); /* Subtract header and footer heights from viewport height */
  background: url(${gearphoto});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

`;

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts2 />} />
          <Route path="/about-us" element={<AboutUs2 />} />
          <Route path="/equipment" element={<Equipment2 />} />
          <Route path="/services" element={<Services2 />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;