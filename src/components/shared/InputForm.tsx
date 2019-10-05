import React, { RefObject } from "react";
import styled from "styled-components";

const Input = styled.input``;

type Props = {
  refObj?: RefObject<HTMLInputElement>;
  placeholder?: string;
};

const InputForm = ({ refObj, placeholder }: Props) => {
  return <Input ref={refObj} placeholder={placeholder} />;
};

export default InputForm;
