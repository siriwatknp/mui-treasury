import { isHeaderClipped } from '../../utils';
import createEffect from '../../effects/Header/HeaderEffect';
import createWidthInterface from '../Width';
import createMarginInterface from '../Margin';
import { ISidebarEffect, HeaderConfig, IMargin, IWidth } from '../../types';

export default (config: HeaderConfig, sidebarEffects: ISidebarEffect[]) => {
  const headerEffect = createEffect(config);

  const marginInterfaces: IMargin[] = [];
  const widthInterfaces: IWidth[] = [];

  sidebarEffects.forEach(
    ({ id: sidebarId, getObjectWidth, getObjectMargin }) => {
      widthInterfaces.push(
        isHeaderClipped(config, sidebarId)
          ? createWidthInterface(0)
          : getObjectWidth(config.id)
      );
      marginInterfaces.push(
        isHeaderClipped(config, sidebarId)
          ? createMarginInterface({ marginLeft: 0, marginRight: 0 })
          : getObjectMargin(config.id)
      );
    }
  );

  const marginStyle =
    marginInterfaces.length > 0
      ? marginInterfaces
          .reduce((result, current) => result.combine(current))
          .getStyle()
      : undefined;
  const widthStyle =
    widthInterfaces.length > 0
      ? widthInterfaces
          .reduce((result, current) => result.combine(current))
          .getStyle()
      : undefined;
  return {
    getStyle: () => ({
      position: config.position,
      ...config.top !== undefined && { top: config.top },
      ...marginStyle,
      ...widthStyle,
      ...headerEffect.getHeaderZIndex(),
    }),
  };
};
