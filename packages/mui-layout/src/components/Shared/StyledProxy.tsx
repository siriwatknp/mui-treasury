import React from 'react';
import defaultStyled from '../../core/styled';
import { MediaQueries } from '../../utils/createBreakpointStyles';

export interface HiddenProxyProps {
  styles?: MediaQueries;
  hiddenStyles?: MediaQueries;
  className?: string;
  style?: object;
}

export const generateStyledProxyCreator = (styled = defaultStyled) => {
  function createProxyStyledComponent<T>(
    WrappedComponent: React.ComponentType<T> | keyof JSX.IntrinsicElements,
    refClassName?: string
  ) {
    const ProxyComponent: React.FC<T & HiddenProxyProps> = ({
      hiddenStyles,
      styles,
      ...props
    }): React.ReactElement => <WrappedComponent {...(props as T)} />;

    const StyledComponent = styled(ProxyComponent)<HiddenProxyProps>(
      ({ styles, hiddenStyles }) => ({
        ...hiddenStyles,
        ...(refClassName
          ? {
              [`& .${refClassName}`]: styles,
            }
          : styles),
      })
    );

    StyledComponent.displayName =
      typeof WrappedComponent === 'string'
        ? 'StyledComponent'
        : WrappedComponent.displayName || WrappedComponent.name;

    return StyledComponent;
  }

  return createProxyStyledComponent;
};

export default generateStyledProxyCreator();
