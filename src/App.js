import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import gearphoto from "./assets/gearphoto.png";
import Equipment from "./components/Equipment";
import Services from "./components/Services";
import './App.css';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 5.5rem ); /* Subtract header and footer heights from viewport height */
  background: url(${gearphoto});
  background-repeat: no-repeat;
  background-size: 100%;
  background-color:	#FFFAF0;
  background-position: bottom;
  overflow-x: hidden;
padding-bottom: 1rem;
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
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;