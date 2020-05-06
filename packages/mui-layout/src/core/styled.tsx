import React from 'react';

const DefaultStyled = function<T>(
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

export default DefaultStyled;
