import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 0;
`;

const Wrapper = styled.header`
  background-color: #db4c3f;
  color: #fff;
`;

const Header = () => {
  return (
    <Wrapper>
      <H1>ToDo App</H1>
    </Wrapper>
  );
};

export default Header;
