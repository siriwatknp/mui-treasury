import type {} from "@mui/x-tree-view/themeAugmentation";
import { ThemeComponents } from "../types";

export const treeViewTheme: ThemeComponents = {
  MuiTreeItem: {
    styleOverrides: {
      content: ({ theme }) => ({
        "&[data-selected]": {
          "--Icon-color": "currentColor",
          backgroundColor: "transparent",
          "&[data-focused]": {
            backgroundColor: (theme.vars || theme).palette.action.hover,
          },
          "& .MuiTreeItem-label": {
            fontWeight: "bold",
          },
        },
      }),
    },
  },
};
