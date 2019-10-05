import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};

export default App;
