import React from "react";
import styled from "styled-components";

const Input = styled.input``;

type Props = {
  placeholder?: string;
};

const InputForm = ({ placeholder }: Props) => {
  return <Input placeholder={placeholder} />;
};

export default InputForm;
