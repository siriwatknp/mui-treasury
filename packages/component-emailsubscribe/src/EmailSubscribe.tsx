import React from "react";
import cx from "clsx";
import {
  experimentalStyled as styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import { emailSubscribeClasses } from "./emailSubscribeClasses";

const FormRoot = styled(
  "form",
  {},
  {
    name: "JunEmailSubscribe",
    slot: "Form",
    overridesResolver: (props, styles) => styles.form,
  }
)({
  display: "flex",
  borderRadius: 4,
  "&:focus-within": {
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.16)",
  },
});

export type EmailSubscribeFormProps = Omit<
  JSX.IntrinsicElements["form"],
  "onSubmit"
> & {
  /**
   * a function to be called with valid email
   */
  onSubmit: (value: string) => void;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
};

export const Form = React.forwardRef<
  HTMLFormElement,
  Omit<JSX.IntrinsicElements["form"], "onSubmit"> & {
    onSubmit: (value: string) => void;
  }
>(function EmailSubscribeForm({ children, ...inProps }, ref) {
  const props = useThemeProps<
    Theme,
    EmailSubscribeFormProps,
    "JunEmailSubscribe"
  >({
    props: inProps,
    name: "JunEmailSubscribe",
  });
  const { onSubmit, className, ...other } = props;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as {
      elements?: { email?: { value: string } };
    };
    onSubmit(target?.elements?.email?.value ?? "");
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

const InputRoot = styled(
  "input",
  {},
  {
    name: "JunEmailSubscribe",
    slot: "Input",
    overridesResolver: (props, styles) => styles.input,
  }
)(({ theme: { palette, typography } }) => ({
  backgroundColor: palette.background.paper,
  minWidth: 256,
  flex: 1,
  fontSize: "1rem",
  fontFamily: typography.fontFamily,
  lineHeight: 1.5,
  alignSelf: "stretch",
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
export type EmailSubscribeInputProps = JSX.IntrinsicElements["input"] & {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
};
export const Input = React.forwardRef<
  HTMLInputElement,
  EmailSubscribeInputProps
>(function EmailSubscribeInput({ onChange, ...inProps }, ref) {
  const [error, setError] = React.useState(false);
  const props = useThemeProps<
    Theme,
    EmailSubscribeInputProps,
    "JunEmailSubscribe"
  >({
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

const SubmitRoot = styled(
  ButtonBase,
  {},
  {
    name: "JunEmailSubscribe",
    slot: "Submit",
    overridesResolver: (props, styles) => styles.submit,
  }
)(({ theme: { palette, spacing, typography } }) => ({
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
export type EmailSubscribeSubmitProps = ButtonBaseProps;
export const Submit = React.forwardRef<
  HTMLButtonElement,
  EmailSubscribeSubmitProps
>(function EmailSubscribeSubmit(
  { children = "Submit", className, ...inProps },
  ref
) {
  const props = useThemeProps<
    Theme,
    EmailSubscribeSubmitProps,
    "JunEmailSubscribe"
  >({
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
