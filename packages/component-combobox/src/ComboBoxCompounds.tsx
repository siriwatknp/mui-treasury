import React, { forwardRef, useState, PropsWithChildren } from "react";
import cx from "clsx";
import ListSubheader, {
  ListSubheaderProps,
} from "@mui/material/ListSubheader";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import FormLabel, { FormLabelProps } from "@mui/material/FormLabel";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import Popper from "@mui/material/Popper";
import { AnchorContext, useComboBoxCtx } from "./ComboBoxContext";
import { useComboBoxStyles } from "./ComboBox.styles";

export const ComboFormControl = (props: FormControlProps) => {
  const { getRootProps, setAnchorEl, useStyles } = useComboBoxCtx();
  const classes = useStyles();
  return (
    <FormControl
      {...props}
      ref={setAnchorEl}
      className={cx(classes.comboBox, props.className)}
      {...getRootProps()}
    />
  );
};

export const ComboLabel = (props: FormLabelProps) => {
  const { getInputLabelProps } = useComboBoxCtx();
  return <FormLabel {...props} {...getInputLabelProps()} />;
};

export const ComboAnchor = ({
  children,
  className,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements["div"]>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const classes = useComboBoxStyles();
  return (
    <div className={cx(classes.anchor, className)} {...props} ref={setAnchorEl}>
      <AnchorContext.Provider value={anchorEl}>
        {children}
      </AnchorContext.Provider>
    </div>
  );
};

export const ComboInput = forwardRef<HTMLInputElement, InputBaseProps>(
  (props, ref) => {
    const { getInputProps, useStyles } = useComboBoxCtx();
    const classes = useStyles();
    const inputProps = getInputProps();
    return (
      <InputBase
        ref={ref}
        startAdornment={<div className={cx(classes.dot)} />}
        {...props}
        className={cx(classes.inputBase, props?.className)}
        classes={{
          ...props?.classes,
          input: cx(classes.input, props?.classes?.input),
        }}
        inputProps={inputProps}
      />
    );
  }
);

export const ComboList = ({ children }: PropsWithChildren<{}>) => {
  const { popupOpen, anchorEl, getListboxProps, useStyles } = useComboBoxCtx();
  const classes = useStyles();
  if (popupOpen && anchorEl) {
    return (
      <Popper
        open
        anchorEl={anchorEl}
        role="presentation"
        className={classes.popper}
        style={{ width: anchorEl?.clientWidth }}
      >
        <ul className={cx(classes.listBox)} {...getListboxProps()}>
          {children}
        </ul>
      </Popper>
    );
  }
  return null;
};

export const ComboGroup = ({
  children,
  label,
  ListSubheaderProps,
  ...props
}: PropsWithChildren<
  {
    label: string;
    ListSubheaderProps?: ListSubheaderProps<"div", {}>;
  } & JSX.IntrinsicElements["li"]
>) => {
  const { useStyles } = useComboBoxCtx();
  const classes = useStyles();
  return (
    <li {...props}>
      <ListSubheader
        component="div"
        {...ListSubheaderProps}
        className={cx(classes.groupLabel, ListSubheaderProps?.className)}
      >
        {label}
      </ListSubheader>
      <ul className={classes.groupUl}>{children}</ul>
    </li>
  );
};

export const ComboOption = ({
  children,
  index,
  option,
}: PropsWithChildren<{ option: any; index: number }>) => {
  const { getOptionProps, useStyles } = useComboBoxCtx();
  const classes = useStyles();
  const optionProps = getOptionProps({ option, index });
  return (
    <li className={classes.option} {...optionProps}>
      {children}
    </li>
  );
};
