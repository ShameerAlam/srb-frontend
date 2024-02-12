import React from "react";
import "./styles.css";
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
    <AccountBox />
  </AppContainer>
}
