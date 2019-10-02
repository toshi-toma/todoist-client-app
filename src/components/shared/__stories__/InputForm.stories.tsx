import React from "react";
import InputForm from "../InputForm";

export default {
  title: "shared/InputForm"
};

export const normal = () => <InputForm />;
export const withPlaceholder = () => (
  <InputForm placeholder="Enter you API token" />
);
