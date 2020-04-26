import { useState, useEffect } from "react"
import { useLayoutCtx } from "../Context"
import HeaderEffect from "../../effects/Header"
import useScreen from "./useScreen"
import useScrollY from "./useScrollY"
import useHeaderResize from "./useHeaderResize"
import { pickNearestBreakpoint, subtractCalc } from "../../utils"
import { isCollapsibleSidebarConfig } from "../../utils/sidebarChecker"

export const useEdgeHeaderMagnet = (sidebarId: string): { height: string } => {
  const screen = useScreen()
  const scrollY = useScrollY()
  const {
    data: { header, headerId, edgeSidebar },
  } = useLayoutCtx()
  const headerConfig = pickNearestBreakpoint(header, screen)
  const headerEffect = HeaderEffect(headerConfig)
  const sidebarConfig = pickNearestBreakpoint(
    edgeSidebar.configMapById[sidebarId],
    screen
  )
  const resizedHeight = useHeaderResize(headerId)
  const [headerHeight, setHeaderHeight] = useState("")
  useEffect(() => {
    if (
      resizedHeight &&
      headerConfig &&
      headerConfig.position === "relative" &&
      headerEffect.isObjectClipped(sidebarId) &&
      isCollapsibleSidebarConfig(sidebarConfig) &&
      sidebarConfig.headerMagnetEnabled
    ) {
      setHeaderHeight(subtractCalc(resizedHeight, scrollY))
    } else {
      setHeaderHeight("")
    }
  }, [resizedHeight, screen, scrollY])

  return { height: headerHeight } // inline style
}

export default useEdgeHeaderMagnet
