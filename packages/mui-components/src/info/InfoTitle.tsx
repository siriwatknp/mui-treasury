import React from 'react';
import cx from 'clsx';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { useStyleCtx } from './Info';

const InfoTitle = ({ className, children, ...props }: TypographyProps) => {
  const styles = useStyleCtx();
  return (
    <Typography
      className={cx('InfoTitle', styles.title, className)}
      variant={'h6'}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default InfoTitle;
