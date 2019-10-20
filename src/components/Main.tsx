import React, { useState, useEffect } from "react";
import styled from "styled-components";

import TodoList from "./Todoist/TodoList";
import TokenForm from "./Todoist/TokenForm";
import { storeToken, getTokenFromStorage } from "../util/StorageController";

const Wrapper = styled.main``;

const Main = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const maybeToken = getTokenFromStorage();
    if (maybeToken) {
      setToken(maybeToken);
    }
  });

  const handleSetToken = (t: string) => {
    setToken(t);
    storeToken(t);
  };

  return (
    <Wrapper>
      {token ? (
        <TodoList token={token} />
      ) : (
        <TokenForm handleSetToken={handleSetToken} />
      )}
    </Wrapper>
  );
};

export default Main;
