import React from 'react';
import cx from 'clsx';
import { useCategoryItemStyles } from './StylesContext';

type AnyTag = keyof JSX.IntrinsicElements | React.ComponentType<any>;

type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : any;

function CategoryItem<T extends AnyTag = 'a'>({
  as: Component = 'a',
  active,
  children,
  ...props
}: React.PropsWithChildren<{ as?: T; active?: boolean }> & PropsOf<T>) {
  const classes = useCategoryItemStyles();
  return (
    <Component
      className={cx(classes.item, active && classes.active, props.className)}
      {...(typeof Component !== 'string' && {
        activeClassName: classes.active,
      })}
      {...props}
    >
      {children}
    </Component>
  );
}

export default CategoryItem;
