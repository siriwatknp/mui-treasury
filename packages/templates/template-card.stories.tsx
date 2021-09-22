import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Source } from "@storybook/addon-docs/blocks";
// @ts-ignore
import note from "./note.md";

const Pages = {
  "social/CardSocial": React.lazy(() => import("./src/card/social/CardSocial")),
  "sysi/CardSysi": React.lazy(() => import("./src/card/sysi/CardSysi")),
  "galaxy/CardGalaxy": React.lazy(() => import("./src/card/galaxy/CardGalaxy")),
  "tutor/CardTutor": React.lazy(() => import("./src/card/tutor/CardTutor")),
  "news3/CardNews3": React.lazy(() => import("./src/card/news3/CardNews3")),
  // hygen-inject-page
};

export default {
  title: "Template/Card",
  parameters: {
    docs: {
      page: () => <Source />,
    },
    layout: "centered",
    viewport: {
      disable: true,
    },
    // backgrounds: {
    //   grid: {
    //     disable: true,
    //   },
    // },
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
    storysource: {
      disable: true,
    },
  },
} as Meta;

const fileMapping: { [k: string]: string } = {};
const context = require.context(
  "!raw-loader!./src/card",
  true,
  /(?<!index)\.tsx/
);
context.keys().forEach((filename) => {
  fileMapping[filename] = context(filename).default;
});

const createStory = (
  name: keyof typeof Pages,
  parameters?: Story["parameters"]
) => {
  const style = name.split("/")[0];
  const transformedNote = note
    .replace("$template", `template-card-${style}`)
    .replace("$docUrl", `/docs/template-card--${style}`)
    .replace(
      "$dependencies",
      parameters?.dependencies
        ? `${parameters.dependencies
            .map(
              (dep: string) =>
                `- ${
                  dep.startsWith("@mui-treasury")
                    ? `[\`${dep}\`](/story/${dep.split("/")[1]})`
                    : `\`${dep}\``
                }`
            )
            .join("\n")}

### Installation

**npm**

${"```"}bash
npm install ${parameters.dependencies.join(" ")}
${"```"}

**yarn**

\`\`\`bash
yarn add ${parameters.dependencies.join(" ")}
\`\`\`
`
        : "No dependencies"
    );
  const Component = Pages[name];
  function StoryComponent() {
    return <Component style={{ resize: "horizontal", overflow: "auto" }} />;
  }

  StoryComponent.parameters = {
    backgrounds: {},
    notes: {
      markdown: transformedNote,
    },
    ...parameters,
    docs: {
      ...parameters?.docs,
      source: {
        code: fileMapping[`./${name}.tsx`],
      },
    },
  };
  return StoryComponent as Story;
};

export const Social = createStory("social/CardSocial", {
  googleFont: "Barlow",
  dependencies: ["@mui-treasury/component-flex"],
});
export const Sysi = createStory("sysi/CardSysi", {
  googleFont: "Kanit",
  dependencies: ["@mui-treasury/component-flex"],
});
export const Galaxy = createStory("galaxy/CardGalaxy", {
  googleFont: "Montserrat",
  googleFontSecondary: "Spartan",
  dependencies: ["@mui-treasury/component-flex"],
});
export const Tutor = createStory("tutor/CardTutor", {
  googleFont: "Open Sans",
  dependencies: [
    "@mui-treasury/component-flex",
    "@mui-treasury/component-info",
  ],
});
export const News3 = createStory("news3/CardNews3", {
  googleFont: "Sen",
  dependencies: [
    "@mui-treasury/component-flex",
    "@mui-treasury/component-info",
  ],
});
