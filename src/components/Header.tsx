import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  background-color: #db4c3f;
  color: #fff;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>ToDo App</h1>
    </Wrapper>
  );
};

export default Header;
