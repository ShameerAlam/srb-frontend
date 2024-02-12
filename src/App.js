import React from "react";
import "./styles.css";
import {  BrowserRouter as Router,Routes, Route, useNavigate } from "react-router-dom";
import Analytics from "./components/plots/showAll.js"
import styled from "styled-components";
import AccountBox from "./components/resuseable_components/accountBox/index.jsx"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return <AppContainer>
 <Router>
 <Routes>
          <Route exact path="/" element={<AccountBox />} />
          
          <Route exact path="/Analytics" element={<Analytics />} />
          
        </Routes>
        </Router>
    

  </AppContainer>
}
