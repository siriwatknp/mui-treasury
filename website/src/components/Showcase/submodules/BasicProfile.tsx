import React from 'react';
import { BoxProps } from '@material-ui/core/Box';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { Item, Row } from '@mui-treasury/components/flex';
import makeStyles from '@material-ui/styles/makeStyles';

export type BasicProfileProps = {
  creators: Array<{ face: string; name: string; link: string }>;
  actions?: React.ReactNode;
} & BoxProps;

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: '#495869',
  },
  overline: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8D9CAD',
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: palette.mode === 'dark' ? palette.text.secondary : '#495869',
  },
}));

const BasicProfile = ({ creators, actions, ...props }: BasicProfileProps) => {
  const styles = useBasicProfileStyles();
  return (
    <Row {...props}>
      <Item position={'middle'}>
        <AvatarGroup>
          {creators.map(c => (
            <Tooltip key={c.name} title={c.name}>
              <Avatar
                {...(typeof c.face === 'string'
                  ? { alt: c.name, src: c.face }
                  : { children: c.name.substr(0, 1) })}
              />
            </Tooltip>
          ))}
        </AvatarGroup>
      </Item>
      <Item position={'middle'} pl={{ sm: 0, lg: 0 }}>
        <Typography className={styles.overline}>
          {creators.length > 1 ? 'CREATORS' : 'CREATOR'}
        </Typography>
        <Typography className={styles.name}>
          {creators.map((c, i) => (
            <React.Fragment key={c.name}>
              {c.link ? (
                <a
                  className={styles.name}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.name}
                </a>
              ) : (
                c.name
              )}
              {i !== creators.length - 1 && ', '}
            </React.Fragment>
          ))}
        </Typography>
      </Item>
      {actions}
    </Row>
  );
};

export default BasicProfile;
