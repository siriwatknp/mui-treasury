import React from "react";

export default function googleFont(fonts: string[] = []) {
  return (Story: any) => {
    return (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap"
          rel="stylesheet"
        />
        {fonts.map((font) => (
          <link
            key={font}
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css2?family=${font}&display=swap`}
          />
        ))}
        <Story />
      </React.Fragment>
    );
  };
}
