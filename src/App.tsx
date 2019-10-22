import React, { useState } from "react";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Main from "./components/Main";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <>
      <GlobalStyle />
      <Header token={token} />
      <Main token={token} setToken={setToken} />
    </>
  );
};

export default App;
