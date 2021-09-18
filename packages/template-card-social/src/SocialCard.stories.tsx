import React from "react";
import SocialCard from "./SocialCard";

export default {
  title: "Template/Card/SocialCard",
  parameters: {
    layout: "centered",
  },
};

export const Demo = () => {
  return <SocialCard style={{ resize: "horizontal", overflow: "auto" }} />;
};
