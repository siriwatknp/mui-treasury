import React from "react"

const Context = React.createContext(false)
Context.displayName = "FullScreenCtx"

export const useFullScreenCtx = () => React.useContext(Context)

export default Context
