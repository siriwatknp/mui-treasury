import React, { PropsWithChildren, ReactElement, useContext } from "react";
import useAutocomplete, {
  AutocompleteGroupedOption,
  UseAutocompleteProps,
} from "@mui/material/useAutocomplete";
import {
  ComboAnchor,
  ComboFormControl,
  ComboGroup,
  ComboInput,
  ComboLabel,
  ComboList,
  ComboOption,
} from "./ComboBoxCompounds";
import { AnchorContext, ComboBoxContext } from "./ComboBoxContext";

export function ComboBox<
  T,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
>({
  children,
  renderOptions,
  renderGroupedOptions,
  ...props
}: PropsWithChildren<
  Omit<
    UseAutocompleteProps<T, false, DisableClearable, FreeSolo>,
    "groupBy" | "multiple"
  > &
    (
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
          renderOptions: (options: T[]) => ReactElement | null;
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
    // @ts-ignore
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
      }}
    >
      {children}
      {"groupBy" in props
        ? renderGroupedOptions?.(
            groupedOptions as AutocompleteGroupedOption<T>[]
          )
        : renderOptions?.(groupedOptions as T[])}
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
