import React, { forwardRef, PropsWithChildren, useState } from "react";
import Box from "@mui/material/Box";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import FormLabel, { FormLabelProps } from "@mui/material/FormLabel";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import ListSubheader, { ListSubheaderProps } from "@mui/material/ListSubheader";
import Popper from "@mui/material/Popper";
import { AnchorContext, useComboBoxCtx } from "./ComboBoxContext";

export const ComboFormControl = (props: FormControlProps) => {
  const { getRootProps, setAnchorEl } = useComboBoxCtx();
  return (
    <FormControl
      {...props}
      ref={setAnchorEl}
      {...getRootProps()}
      sx={{
        padding: "0 1rem",
        position: "relative",
        display: "flex",
        "& + &": {
          marginTop: 3,
          "&:after": {
            content: '""',
            display: "block",
            height: 24,
            border: "1px dashed",
            borderColor: "grey.500",
            position: "absolute",
            left: `calc(1rem + 3px)`,
            top: 0,
            transform: "translateY(-100%)",
          },
          "& [data-dot]": {
            borderRadius: 0,
          },
        },
      }}
    />
  );
};

export const ComboLabel = (props: FormLabelProps) => {
  const { getInputLabelProps } = useComboBoxCtx();
  return <FormLabel {...props} {...getInputLabelProps()} />;
};

export const ComboAnchor = ({
  children,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements["div"]>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  return (
    <Box
      {...props}
      ref={setAnchorEl}
      sx={{
        position: "relative",
        border: "1px solid",
        borderColor: "grey.500",
        borderRadius: "0.25rem",
        backgroundColor: "#fff",
        paddingBottom: "0.625rem",
      }}
    >
      <AnchorContext.Provider value={anchorEl}>
        {children}
      </AnchorContext.Provider>
    </Box>
  );
};

export const ComboInput = forwardRef<HTMLInputElement, InputBaseProps>(
  (props, ref) => {
    const { getInputProps } = useComboBoxCtx();
    const inputProps = getInputProps();
    return (
      <InputBase
        ref={ref}
        startAdornment={
          <Box
            data-dot
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "text.primary",
              marginRight: "0.75rem",
              flexShrink: 0,
            }}
          />
        }
        {...props}
        inputProps={inputProps}
        sx={{ display: "flex" }}
      />
    );
  }
);

export const ComboList = ({ children }: PropsWithChildren<{}>) => {
  const { popupOpen, anchorEl, getListboxProps } = useComboBoxCtx();
  if (popupOpen && anchorEl) {
    return (
      <Popper
        open
        anchorEl={anchorEl}
        role="presentation"
        style={{ width: anchorEl?.clientWidth }}
        sx={{ zIndex: 1200 }}
      >
        <Box
          component="ul"
          sx={{
            margin: "4px 0",
            padding: 0,
            zIndex: 1,
            top: 8,
            left: 0,
            right: 0,
            listStyle: "none",
            backgroundColor: "background.paper",
            overflow: "auto",
            maxHeight: "40vh",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "0.25rem",
          }}
          {...getListboxProps()}
        >
          {children}
        </Box>
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
  return (
    <li {...props}>
      <ListSubheader
        component="div"
        {...ListSubheaderProps}
        sx={{
          fontSize: "0.75rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "grey.500",
          lineHeight: "2.5rem",
          backgroundColor: "background.paper",
          letterSpacing: "0.5px",
        }}
      >
        {label}
      </ListSubheader>
      <Box sx={{ padding: 0 }}>{children}</Box>
    </li>
  );
};

export const ComboOption = ({
  children,
  index,
  option,
}: PropsWithChildren<{ option: any; index: number }>) => {
  const { getOptionProps } = useComboBoxCtx();
  const optionProps = getOptionProps({ option, index });
  return (
    <Box
      component="li"
      sx={(theme) => ({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        cursor: "pointer",
        paddingBlock: "0.375rem",
        paddingInline: "1rem",
        boxSizing: "border-box",
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        "& svg": {
          marginLeft: "-0.25rem",
          marginRight: "0.5rem",
        },
        '&[aria-selected="true"]': {
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.1)`
            : theme.palette.action.hover,
          fontWeight: 500,
          color: (theme.vars || theme).palette.primary.main,
          "& *": {
            color: theme.vars
              ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.6)`
              : theme.palette.action.active,
          },
        },
        '&.Mui-focusVisible:not([aria-selected="true"])': {
          backgroundColor: theme.palette.action.hover,
        },
        "&:active": {
          fontWeight: 500,
        },
        '&[aria-disabled="true"]': {
          opacity: theme.palette.action.disabledOpacity,
          pointerEvents: "none",
        },
      })}
      {...optionProps}
    >
      {children}
    </Box>
  );
};
