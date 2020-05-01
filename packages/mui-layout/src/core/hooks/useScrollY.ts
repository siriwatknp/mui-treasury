import { useEffect, useRef, useState } from "react"
import debounce from "debounce"
import { useWindow } from "../Context"

function getScrollY(obj: Window) {
  return typeof obj === "object" ? obj.scrollY : 0
}

export const useScrollY = () => {
  const { iWindow } = useWindow()
  const [scrollY, setScrollY] = useState(getScrollY(iWindow))
  const debounceScrollListener = useRef(
    debounce(() => {
      setScrollY(getScrollY(iWindow))
    }, 300)
  )
  useEffect(() => {
    iWindow.addEventListener("scroll", debounceScrollListener.current)
    return () => {
      iWindow.removeEventListener("scroll", debounceScrollListener.current)
    }
  }, [])
  return scrollY
}

export default useScrollY
