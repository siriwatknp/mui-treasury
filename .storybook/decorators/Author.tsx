import React, { memo } from "react";
import { Img } from "@storybook/components";
import { useParameter } from "@storybook/manager-api";

export const Tool = memo(function MyAddonSelector() {
  const author = useParameter<string | undefined>("githubUsername");
  if (!author) {
    return null;
  }
  return (
    <a
      key="contributor"
      style={{
        display: "flex",
        gap: "0.25rem",
        alignItems: "center",
        alignSelf: "center",
        fontSize: "0.75rem",
        fontWeight: 600,
        color: "#029CFD",
        textDecoration: "none",
      }}
      href={`https://github.com/${author}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img
        src={`https://github.com/${author}.png?size=64`}
        style={{ width: 28, borderRadius: 28 }}
      />
      By {author}
    </a>
  );
});
