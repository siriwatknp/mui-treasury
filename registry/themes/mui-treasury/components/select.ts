import { ThemeComponents } from "../types";

export const selectTheme: ThemeComponents = {
  MuiSelect: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      select: {
        "&.MuiOutlinedInput-input": {
          padding: "10px 14px",
          minHeight: "1.42857em", // 20px
          "&.MuiInputBase-inputSizeSmall": {
            padding: "7px 12px",
          },
        },
        "&.MuiFilledInput-input": {
          padding: "25px 12px 8px",
          "&.MuiInputBase-inputSizeSmall": {
            padding: "21px 10px 4px",
          },
        },
        "&.MuiInputBase-input.MuiInputBase-input": {
          paddingRight: 32,
        },
      },
      icon: ({ theme }) => ({
        color: (theme.vars || theme).palette.text.secondary,
        right: 8,
        transition: theme.transitions.create(["transform"], {
          duration: theme.transitions.duration.shorter,
        }),
      }),
      iconOpen: {
        transform: "rotate(180deg)",
      },
    },
  },
};
