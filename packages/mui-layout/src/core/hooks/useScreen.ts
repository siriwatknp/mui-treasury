import React from "react"
import debounce from "debounce"
import useTheme from "@material-ui/core/styles/useTheme"
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"
import { useWindow } from "../Context"
import { mapWidthToScreen } from "../../utils"

function getWindowWidth(w: Window) {
  return typeof w === "object" ? w.innerWidth : undefined
}

export const useScreen = (): Breakpoint => {
  const { breakpoints } = useTheme()
  const { iWindow } = useWindow()
  const getScreen = (): Breakpoint =>
    mapWidthToScreen(getWindowWidth(iWindow), breakpoints)

  const [screen, setScreen] = React.useState<Breakpoint>(getScreen())
  const updater = React.useRef(
    debounce(() => {
      setScreen(getScreen())
    }, 200)
  )

  React.useEffect(() => {
    iWindow.addEventListener("resize", updater.current)
    return () => {
      iWindow.removeEventListener("resize", updater.current)
    }
  }, [])

  return screen
}

export default useScreen
