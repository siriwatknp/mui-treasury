import { get } from '../../utils';
import createEffect from '../../effects/Header/HeaderEffect';
import createWidthInterface from '../Width';
import createMarginInterface from '../Margin';
import { ISidebarEffect, HeaderConfig, IMargin, IWidth } from '../../types';

const shouldClipped = (
  config: Pick<HeaderConfig, 'clipped'>,
  objectId: string
) => {
  return (
    (typeof config.clipped === 'boolean' && config.clipped) ||
    (typeof config.clipped === 'object' &&
      get(config, ['clipped', objectId], get(config, 'clipped._other')))
  );
};

export default (config: HeaderConfig, sidebarEffects: ISidebarEffect[]) => {
  const headerEffect = createEffect(config);

  const marginInterfaces: IMargin[] = [];
  const widthInterfaces: IWidth[] = [];

  sidebarEffects.forEach(
    ({ id: sidebarId, getObjectWidth, getObjectMargin }) => {
      widthInterfaces.push(
        shouldClipped(config, sidebarId)
          ? createWidthInterface(0)
          : getObjectWidth(config.id)
      );
      marginInterfaces.push(
        shouldClipped(config, sidebarId)
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
      ...config.top && { top: config.top },
      ...marginStyle,
      ...widthStyle,
      ...headerEffect.getHeaderZIndex(),
    }),
  };
};
