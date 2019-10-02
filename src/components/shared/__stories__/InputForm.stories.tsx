import React from "react";
import InputForm from "../InputForm";

export default {
  title: "InputForm"
};

export const normal = () => <InputForm />;
export const withPlaceholder = () => (
  <InputForm placeholder="Enter you API token" />
);
