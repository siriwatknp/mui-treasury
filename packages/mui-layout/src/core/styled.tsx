import React from 'react';

let styled = function<T>(
  WrappedComponent: React.ComponentType<T> | keyof JSX.IntrinsicElements
) {
  return function<K>(fn: (c: K) => any): React.FC<T & K> {
    return function(
      props: React.PropsWithChildren<{ className?: string } & K>
    ) {
      return <WrappedComponent {...(props as T & K)} />;
    };
  };
};

/**
 * Call this function before App rendered
 * @param styledLib
 */
// @ts-ignore
export function setupStyled(styledLib) {
  styled = styledLib;
}

export default styled;
