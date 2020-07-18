import React from 'react';
import cx from 'clsx';
import { useNavItemStyles } from './StylesContext';

type AnyTag = 'a' | React.ComponentType<any>;

type PropsOf<Tag> = Tag extends 'a'
  ? JSX.IntrinsicElements['a'] & { active?: boolean }
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : any;

function NavItem<T extends AnyTag = 'a'>({
  as: Component = 'a',
  active,
  children,
  ...props
}: React.PropsWithChildren<{ as?: T }> & PropsOf<T>) {
  const classes = useNavItemStyles();
  return (
    <Component
      className={cx(classes.item, active && classes.active, props.className)}
      {...Component !== 'a' && { activeClassName: classes.active }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default NavItem;
