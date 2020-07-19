import React from 'react';
import cx from 'clsx';
import { useCtxStyles } from './StylesContext';

type AnyTag = keyof JSX.IntrinsicElements | React.ComponentType<any>;

type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : any;

function CategoryTitle<T extends AnyTag = 'h6'>({
  as: Component = 'h6',
  children,
  ...props
}: React.PropsWithChildren<{ as?: T }> & PropsOf<T>) {
  const classes = useCtxStyles();
  return (
    <Component className={cx(classes.title, props.className)} {...props}>
      {children}
    </Component>
  );
}

export default CategoryTitle;
