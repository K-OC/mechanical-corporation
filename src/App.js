import React from 'react'; 
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom";
import GlobalStyle from './globalStyles';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';

const Wrapper = styled.div`
background-color: #fff;
`

function App() {
  return (
   <>
   <GlobalStyle/>
   <Header></Header>
   <Wrapper>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact/>}/>
    </Routes>
    
   </Wrapper>
   </>
  );
}

export default App;
