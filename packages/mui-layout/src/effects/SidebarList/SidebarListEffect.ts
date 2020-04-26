import {
  ISidebarEffect,
  ISidebarListEffect,
  IMargin,
  IWidth,
} from "../../types"

export default (
  sidebarEffects: ISidebarEffect[],
  objectId?: string
): ISidebarListEffect => {
  const marginInterfaces: IMargin[] = []
  const widthInterfaces: IWidth[] = []

  sidebarEffects.forEach(({ getObjectWidth, getObjectMargin }) => {
    widthInterfaces.push(getObjectWidth(objectId))
    marginInterfaces.push(getObjectMargin(objectId))
  })
  return {
    marginStyle:
      marginInterfaces.length > 0
        ? marginInterfaces
            .reduce((result, current) => result.combine(current))
            .getStyle()
        : undefined,
    widthStyle:
      widthInterfaces.length > 0
        ? widthInterfaces
            .reduce((result, current) => result.combine(current))
            .getStyle()
        : undefined,
  }
}
