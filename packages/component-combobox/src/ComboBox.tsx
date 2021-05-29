import React, { PropsWithChildren, ReactElement, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useAutocomplete, {
  AutocompleteGroupedOption,
  UseAutocompleteProps,
} from "@material-ui/core/useAutocomplete";
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

export type ComboBoxClassKey = keyof ReturnType<typeof useStyles>;
export type ComboBoxClasses = Partial<Record<ComboBoxClassKey, string>>;
export type ComboBoxProps = {
  classes?: ComboBoxClasses;
};

export function ComboBox<
  T,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
>({
  children,
  renderOptions,
  renderGroupedOptions,
  useStyles = useComboBoxStyles,
  ...props
}: PropsWithChildren<
  Omit<
    UseAutocompleteProps<T, false, DisableClearable, FreeSolo>,
    "groupBy" | "multiple"
  > & { useStyles?: typeof useComboBoxStyles } & (
      | {
          groupBy: (option: T) => string;
          renderGroupedOptions: (
            groupedOptions: {
              key: number;
              index: number;
              group: string;
              options: T[];
            }[]
          ) => ReactElement | null;
          renderOptions?: never;
        }
      | {
          groupBy?: never;
          renderGroupedOptions?: never;
          renderOptions: (
            options: T[] | AutocompleteGroupedOption<T>[]
          ) => ReactElement | null;
        }
    )
>) {
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
