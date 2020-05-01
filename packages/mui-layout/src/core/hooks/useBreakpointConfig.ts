import { MapBreakpoint } from "../../types"
import useScreen from "./useScreen"
import { pickNearestBreakpoint } from "../../utils"

export const useBreakpointConfig = <T>(configMap: MapBreakpoint<T>) => {
  const screen = useScreen()
  return pickNearestBreakpoint(configMap, screen)
}

export default useBreakpointConfig
