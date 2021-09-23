import { infoClasses } from "@mui-treasury/component-info";
export const getInfoN02Styles = (arg) => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      textTransform: "uppercase",
      color: palette.text.secondary,
      fontWeight: "bold",
      letterSpacing: "1px",
      fontSize: 14,
      display: "inline-block",
    },
    title: {
      fontSize: 24,
      fontWeight: 900,
      marginBottom: "0.4em",
    },
    subtitle: {
      fontSize: 18,
      color: palette.text.secondary,
    },
  };
};
export const getInfoN02Theme = (theme) => {
  const { eyebrow, head, body } = getInfoN02Styles({ theme });
  return {
    JunInfo: {
      styleOverrides: {
        eyebrow: eyebrow,
        head: head,
        body: body,
      },
    },
  };
};
export const getInfoN02Variant = (theme) => {
  const { eyebrow, head, body } = getInfoN02Styles({ theme });
  return {
    props: { variant: "n02" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.body}`]: body,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
