import React from 'react';
import cx from 'clsx';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { useStyleCtx } from './Info';

const InfoSubtitle = ({ className, children, ...props }: TypographyProps) => {
  const styles = useStyleCtx();
  return (
    <Typography
      className={cx('InfoSubtitle', styles.subtitle, className)}
      variant={'subtitle1'}
      color={'textSecondary'}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default InfoSubtitle;
