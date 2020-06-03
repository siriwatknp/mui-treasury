import React from 'react';
import cx from 'clsx';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { useStyleCtx } from './Info';

const InfoCaption = ({ className, children, ...props }: TypographyProps) => {
  const styles = useStyleCtx();
  return (
    <Typography
      className={cx('InfoCaption', styles.caption, className)}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default InfoCaption;
