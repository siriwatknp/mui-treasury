import { Dictionary, MapBreakpoint } from "./Utils"

export type MarginStyle = {
  marginLeft?: string | number
  marginRight?: string | number
}

export type WidthStyle = {
  width: string | number
}

export type ZIndexStyle = {
  zIndex: number
}

export type ResultStyle = MapBreakpoint<Dictionary<string | number>>

export type InsetSidebarResultStyle = {
  root: ResultStyle
  body: ResultStyle
}

export type EdgeSidebarVariantStyle = {
  persistent: ResultStyle
  permanent: ResultStyle
  temporary: ResultStyle
}

export type EdgeSidebarResultStyle = Dictionary<EdgeSidebarVariantStyle>
