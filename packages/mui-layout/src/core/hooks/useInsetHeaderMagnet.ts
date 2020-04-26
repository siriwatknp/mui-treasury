import { useLayoutCtx } from "../Context"
import useScreen from "./useScreen"
import useScrollY from "./useScrollY"
import useHeaderResize from "./useHeaderResize"
import { pickNearestBreakpoint, subtractCalc } from "../../utils"
import { useEffect, useState } from "react"
import { isFixedInsetSidebarConfig } from "../../utils/sidebarChecker"

export const useInsetHeaderMagnet = (sidebarId: string) => {
  const screen = useScreen()
  const scrollY = useScrollY()
  const {
    data: { header, headerId, insetSidebar },
  } = useLayoutCtx()
  const headerConfig = pickNearestBreakpoint(header, screen)
  const sidebarConfig = pickNearestBreakpoint(
    insetSidebar.configMapById[sidebarId],
    screen
  )
  const resizedHeight = useHeaderResize(headerId)
  const [headerHeight, setHeaderHeight] = useState("")
  useEffect(() => {
    if (
      resizedHeight &&
      headerConfig.position === "relative" &&
      isFixedInsetSidebarConfig(sidebarConfig) &&
      sidebarConfig.headerMagnetEnabled
    ) {
      setHeaderHeight(subtractCalc(resizedHeight, scrollY))
    } else {
      setHeaderHeight("")
    }
  }, [resizedHeight, screen, scrollY])

  return { height: headerHeight }
}

export default useInsetHeaderMagnet
