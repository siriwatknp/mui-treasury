import { infoClasses } from "@mui-treasury/component-info";
export const getInfoBlogStyles = (arg) => {
  const { spacing } = "theme" in arg ? arg.theme : arg;
  const family =
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
  return {
    eyebrow: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontSize: 12,
      marginBottom: "0.875em",
      display: "inline-block",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "0.35em",
      fontFamily: family,
    },
    subtitle: {
      marginBottom: spacing(2),
      fontSize: "0.8rem",
      letterSpacing: "0.00938em",
      fontFamily: family,
    },
  };
};
export const getInfoBlogTheme = (theme) => {
  const { eyebrow, head, body } = getInfoBlogStyles({ theme });
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
export const getInfoBlogVariant = (theme) => {
  const { eyebrow, head, body } = getInfoBlogStyles({ theme });
  return {
    props: { variant: "blog" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.body}`]: body,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
