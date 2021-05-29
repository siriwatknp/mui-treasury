import React, { useContext } from "react";
import { useComboBoxStyles } from "./ComboBox.styles";

export const AnchorContext = React.createContext<HTMLElement | null>(null);

export type ComboBoxCtxValue<T = any> = {
  useStyles: typeof useComboBoxStyles;
  anchorEl: HTMLElement | null;
  setAnchorEl: () => void;
  popupOpen: boolean;
  getRootProps: () => {};
  getInputProps: () => {};
  getInputLabelProps: () => {};
  getListboxProps: () => {};
  getOptionProps: ({ option, index }: { option: T; index: number }) => {};
};
export const ComboBoxContext = React.createContext<
  ComboBoxCtxValue | undefined
>(undefined);
export const useComboBoxCtx = <T,>() => {
  const ctx = useContext(ComboBoxContext);
  if (!ctx) {
    throw new Error(
      '"useComboBoxCtx" needs to be called inside <ComboBox> component'
    );
  }
  return ctx as ComboBoxCtxValue<T>;
};
