import React from 'react'; 
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Header from './components/Header';

const Wrapper = styled.div`
background-color: #fff;

`

function App() {
  return (
   <>
   <GlobalStyle/>
   <Header></Header>
   <Wrapper>

   </Wrapper>
   </>
  );
}

export default App;
