import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { emailSubscribeClasses } from "./emailSubscribeClasses";
const FormRoot = styled("form", {
  name: "JunEmailSubscribe",
  slot: "Form",
  overridesResolver: (props, styles) => styles.form,
})({
  display: "flex",
  width: 296,
  maxWidth: "100%",
  position: "relative",
});
export const Form = React.forwardRef(function EmailSubscribeForm(
  { children, inputClearedAfterSubmit = true, ...inProps },
  ref
) {
  const props = useThemeProps({
    props: inProps,
    name: "JunEmailSubscribe",
  });
  const { onSubmit, className, ...other } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    onSubmit(target?.elements?.email?.value ?? "");
    if (inputClearedAfterSubmit) {
      if (target.elements?.email) {
        target.elements.email.value = "";
      }
    }
  }
  return (
    <FormRoot
      aria-label="email subscribe"
      ref={ref}
      className={cx(emailSubscribeClasses.form, className)}
      onSubmit={handleSubmit}
      {...other}
    >
      {children}
    </FormRoot>
  );
});
const InputRoot = styled("input", {
  name: "JunEmailSubscribe",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input,
})(({ theme: { palette, typography } }) => ({
  backgroundColor: palette.background.paper,
  minWidth: 0,
  flexGrow: 1,
  flexBasis: 256,
  fontSize: "1rem",
  fontFamily: typography.fontFamily,
  lineHeight: 1.5,
  border: "1px solid",
  borderColor:
    palette.mode === "dark" ? palette.grey[700] : palette.action.disabled,
  borderRadius: "4px 0 0 4px",
  padding: "0.5rem",
  outline: "none",
  color: palette.text.primary,
  "&:hover, &:focus": {
    zIndex: 1,
    borderColor:
      palette.mode === "dark" ? palette.text.secondary : palette.primary.main,
    ...(palette.mode === "light" && {
      boxShadow: `inset 0 0 0 1px ${palette.primary.main}`,
    }),
    backgroundColor: palette.mode === "dark" ? palette.action.hover : "#f9f9f9",
  },
}));
export const Input = React.forwardRef(function EmailSubscribeInput(
  { onChange, ...inProps },
  ref
) {
  const [error, setError] = React.useState(false);
  const props = useThemeProps({
    props: inProps,
    name: "JunEmailSubscribe",
  });
  const { onSubmit, onInvalid, className, ...other } = props;
  return (
    <InputRoot
      type="email"
      ref={ref}
      className={cx(
        emailSubscribeClasses.input,
        error && "Mui-error",
        className
      )}
      placeholder="Type your email"
      name="email"
      required
      onInvalid={(event) => {
        setError(true);
        onInvalid?.(event);
      }}
      onChange={(event) => {
        setError(false);
        onChange?.(event);
      }}
      {...other}
    />
  );
});
const SubmitRoot = styled(ButtonBase, {
  name: "JunEmailSubscribe",
  slot: "Submit",
  overridesResolver: (props, styles) => styles.submit,
})(({ theme: { palette, spacing, typography } }) => ({
  padding: spacing(1, 2),
  marginLeft: -1,
  borderRadius: "0 4px 4px 0",
  fontFamily: typography.fontFamily,
  fontSize: typography.fontSize,
  color: palette.common.white,
  backgroundColor:
    palette.mode === "dark" ? palette.grey[800] : palette.primary.main,
  "&:hover, &:focus": {
    backgroundColor:
      palette.mode === "dark" ? palette.grey[700] : palette.primary.dark,
  },
}));
export const Submit = React.forwardRef(function EmailSubscribeSubmit(
  { children = "Subscribe", className, ...inProps },
  ref
) {
  const props = useThemeProps({
    props: inProps,
    name: "JunEmailSubscribe",
  });
  return (
    <SubmitRoot
      type="submit"
      className={cx(emailSubscribeClasses.submit, className)}
      ref={ref}
      {...props}
    >
      {children}
    </SubmitRoot>
  );
});
