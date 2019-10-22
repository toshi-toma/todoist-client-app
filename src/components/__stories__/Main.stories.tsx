import React from "react";
import Main from "../Main";

export default {
  title: "Main"
};

export const normal = () => <Main token="" setToken={() => {}} />;
export const passingToken = () => (
  <Main token="aaaaaaaaaaaa" setToken={() => {}} />
);
