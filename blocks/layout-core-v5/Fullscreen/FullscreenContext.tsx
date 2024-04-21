import React from "react";

const Context = React.createContext(false);
Context.displayName = "FullscreenCtx";

export const useFullscreenCtx = () => React.useContext(Context);

export default Context;
