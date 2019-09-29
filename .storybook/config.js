import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyle from "../src/GlobalStyle";

const withGlobal = cb => (
  <>
    <GlobalStyle />
    {cb()}
  </>
);

addDecorator(withGlobal);

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.tsx$/), module);
