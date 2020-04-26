import { useEffect, useState, useRef } from "react"
// @ts-ignore
import { ResizeSensor } from "css-element-queries"
import { useWindow } from "../Context"

export const useHeaderResize = (headerId: string, initialHeight?: number | string) => {
  const [height, setHeight] = useState(initialHeight)
  const ref = useRef(0)
  const { iDocument } = useWindow()
  useEffect(() => {
    const headerElm = iDocument.querySelector(`[mui-layout='${headerId}']`)
    if (headerElm) {
      new ResizeSensor(headerElm, () => {
        if (!ref.current) {
          ref.current = headerElm.clientHeight
          setHeight(headerElm.clientHeight)
        }
        if (ref.current !== headerElm.clientHeight) {
          ref.current = headerElm.clientHeight
          setHeight(headerElm.clientHeight)
        }
      })
    }
  }, [])
  return height
}

export default useHeaderResize
