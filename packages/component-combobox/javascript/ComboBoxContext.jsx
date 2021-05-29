import React, { useContext } from "react";
export const AnchorContext = React.createContext(null);
export const ComboBoxContext = React.createContext(undefined);
export const useComboBoxCtx = () => {
  const ctx = useContext(ComboBoxContext);
  if (!ctx) {
    throw new Error(
      '"useComboBoxCtx" needs to be called inside <ComboBox> component'
    );
  }
  return ctx;
};
