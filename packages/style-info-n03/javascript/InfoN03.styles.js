import { infoClasses } from "@mui-treasury/component-info";
export const getInfoN03Styles = (arg) => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      textTransform: "uppercase",
      color: "#9e9e9e",
      marginBottom: "0.35em",
      fontWeight: "bold",
      letterSpacing: "2px",
      fontSize: 16,
      display: "inline-block",
    },
    title: {
      fontSize: 24,
      fontWeight: 900,
      marginBottom: "0.72em",
    },
    subtitle: {
      fontSize: 16,
      color: palette.text.primary,
      lineHeight: 1.75,
    },
  };
};
export const getInfoN03Theme = (theme) => {
  const { eyebrow, head, body } = getInfoN03Styles({ theme });
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
export const getInfoN03Variant = (theme) => {
  const { eyebrow, head, body } = getInfoN03Styles({ theme });
  return {
    props: { variant: "n03" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.body}`]: body,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
