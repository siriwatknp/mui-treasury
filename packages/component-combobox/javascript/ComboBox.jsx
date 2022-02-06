import React, { useContext } from "react";
// TODO: replace @mui/styles with styled
import makeStyles from "@mui/styles/makeStyles";
import useAutocomplete from "@mui/material/useAutocomplete";
import { ComboBoxContext, AnchorContext } from "./ComboBoxContext";
import {
  ComboAnchor,
  ComboFormControl,
  ComboLabel,
  ComboInput,
  ComboList,
  ComboGroup,
  ComboOption,
} from "./ComboBoxCompounds";
import { useComboBoxStyles } from "./ComboBox.styles";
const NAME = "MuiComboBox";
const useStyles = makeStyles(
  () => ({
    root: {},
  }),
  { name: NAME }
);
export function ComboBox({
  children,
  renderOptions,
  renderGroupedOptions,
  useStyles = useComboBoxStyles,
  ...props
}) {
  if (!props.getOptionLabel) {
    throw new Error('"getOptionLabel" is required');
  }
  const {
    getRootProps,
    getInputProps,
    getInputLabelProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    anchorEl,
    setAnchorEl,
    popupOpen,
  } = useAutocomplete({
    openOnFocus: true,
    ...props,
    multiple: false,
    componentName: "ComboBox",
  });
  const comboAnchor = useContext(AnchorContext);
  return (
    <ComboBoxContext.Provider
      value={{
        anchorEl: comboAnchor ?? anchorEl,
        setAnchorEl,
        popupOpen,
        getRootProps,
        getInputProps,
        getInputLabelProps,
        getListboxProps,
        getOptionProps,
        useStyles,
      }}
    >
      {children}
      {"groupBy" in props
        ? /* @ts-ignore : this should be a fix from material-ui */
          renderGroupedOptions?.(groupedOptions)
        : renderOptions?.(groupedOptions)}
    </ComboBoxContext.Provider>
  );
}
ComboBox.Anchor = ComboAnchor;
ComboBox.FormControl = ComboFormControl;
ComboBox.Label = ComboLabel;
ComboBox.Input = ComboInput;
ComboBox.List = ComboList;
ComboBox.Group = ComboGroup;
ComboBox.Option = ComboOption;
