import React, { useState } from "react";
import styled from "styled-components";

import TodoList from "./Todoist/TodoList";
import TokenForm from "./Todoist/TokenForm";

const Wrapper = styled.main``;

const Main = () => {
  const [token, setToken] = useState("");

  const handleSetToken = (t: string) => {
    setToken(t);
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
