import { ThemeComponents } from "../types";

export const avatarTheme: ThemeComponents = {
  MuiAvatar: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: 500,
        fontSize: theme.typography.body2.fontSize,
        backgroundColor: (theme.vars || theme).palette.secondary.light,
        color: (theme.vars || theme).palette.text.secondary,
        ...theme.applyStyles("dark", {
          backgroundColor: (theme.vars || theme).palette.secondary.dark,
        }),
      }),
    },
  },
};
