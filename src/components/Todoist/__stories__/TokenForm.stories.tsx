import React from "react";
import { action } from "@storybook/addon-actions";

import TokenForm from "../TokenForm";

export default {
  title: "TokenForm"
};

export const normal = () => (
  <TokenForm handleSetToken={action("handle set token")} />
);
