import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Column, Item } from '@mui-treasury/components/flex';
import { useGrowIconButtonStyles } from '@mui-treasury/styles/iconButton/grow';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

export type IconBtnLinkProps = {
  src: string;
  label: React.ReactNode;
} & IconButtonProps;

const useStyles = makeStyles(() => ({
  label: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#758392',
  },
}));

export const IconBtnLink = ({ src, label, ...props }: IconBtnLinkProps) => {
  const styles = useStyles();
  const sizedStyles = useSizedIconButtonStyles({ padding: 12, childSize: 64 });
  const growStyles = useGrowIconButtonStyles({
    color: '#ABCFF8',
    thickness: 6,
  });
  return (
    <Column gap={1.5} alignItems={'center'}>
      <Item>
        <IconButton
          component={'a'}
          rel={'noreferrer noopener'}
          target={'_blank'}
          {...props}
          classes={sizedStyles}
          className={growStyles.root}
        >
          <img alt={''} src={src} />
        </IconButton>
      </Item>
      <Item>
        <Typography className={styles.label}>{label}</Typography>
      </Item>
    </Column>
  );
};

export default IconBtnLink;
