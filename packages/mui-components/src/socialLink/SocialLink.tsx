import React from 'react';
import cx from 'clsx';
import SocialIcon, { SocialIconProps } from './SocialIcon';
import { useCtxStyles } from './StylesContext';

export type SocialLinkProps = {
  brand: SocialIconProps['brand'];
} & JSX.IntrinsicElements['a'];

export function SocialLink({
  children,
  brand,
  className,
  ...props
}: BrandLinkProps) {
  const styles = useCtxStyles();
  return (
    <a
      className={cx(styles.anchor, className)}
      target={'_blank'}
      rel={'noopener noreferrer'}
      {...props}
    >
      <SocialIcon className={styles.icon} brand={brand} />
    </a>
  );
}
