import React from "react"
import styled from '../../core/styled';
import { MediaQueries } from "../../utils/createBreakpointStyles"

export interface HiddenProxyProps {
  styles?: MediaQueries
  hiddenStyles?: MediaQueries
}

function createProxyStyledComponent<T>(
  WrappedComponent: React.ComponentType<T>,
  refClassName?: string
) {
  const ProxyComponent: React.FC<T & HiddenProxyProps> = ({
    hiddenStyles,
    styles,
    ...props
  }): React.ReactElement => <WrappedComponent {...(props as T)} />

  const StyledComponent = styled(ProxyComponent)<HiddenProxyProps>(
    ({ styles, hiddenStyles }) => ({
      ...hiddenStyles,
      ...(refClassName
        ? {
            [`& .${refClassName}`]: styles,
          }
        : styles),
    })
  )

  StyledComponent.displayName =
    WrappedComponent.displayName || WrappedComponent.name || "StyledComponent"

  return StyledComponent
}

export default createProxyStyledComponent
