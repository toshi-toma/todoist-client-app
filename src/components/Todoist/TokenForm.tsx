import React, { FC, useRef, FormEvent } from "react";
import styled from "styled-components";

import InputForm from "../shared/InputForm";
import Button from "../shared/Button";

const Form = styled.form``;

type Props = {
  handleSetToken: (t: string) => void;
};

const TokenForm: FC<Props> = ({ handleSetToken }) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputEl.current) {
      const inputValue = inputEl.current.value;
      handleSetToken(inputValue);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputForm refObj={inputEl} placeholder="Enter you API token" />
      <Button>OK</Button>
    </Form>
  );
};

export default TokenForm;
