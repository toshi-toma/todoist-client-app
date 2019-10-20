import React from "react";
import styled from "styled-components";
import { getTokenFromStorage, flushToken } from "../util/StorageController";
import Button from "./shared/Button";

const H1 = styled.h1`
  margin: 0;
`;

const Wrapper = styled.header`
  background-color: #db4c3f;
  color: #fff;
`;

const LogoutButton = styled(Button)``;

const Header = () => {
  const maybeToken = getTokenFromStorage();
  return (
    <Wrapper>
      <H1>ToDo App</H1>
      {maybeToken ? (
        <LogoutButton
          onClick={() => {
            flushToken();
            window.location.reload();
          }}
        >
          Logout
        </LogoutButton>
      ) : null}
    </Wrapper>
  );
};

export default Header;
