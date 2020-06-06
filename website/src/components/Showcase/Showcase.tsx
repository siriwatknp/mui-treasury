import React from 'react';
import cx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Box, { BoxProps } from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// Icons
import CallMade from '@material-ui/icons/CallMade';

// @mui-treasury
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { Column, Item, Row, RowProps } from '@mui-treasury/components/flex';
import StatusChip from '../atoms/StatusChip';

const StyledStatusChip = withStyles({
  root: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
})(StatusChip);

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: '0.2rem',
    backgroundColor: 'rgba(0,0,0,0.72)',
    color: '#fff',
  },
})(Tooltip);

const useCardHeaderStyles = makeStyles(() => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: '1.25rem',
    color: '#122740',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: '0.875rem',
    color: '#495869',
  },
}));

type CardHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
} & RowProps;

const CardHeader = ({ title, description, ...props }: CardHeaderProps) => {
  const styles = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={'middle'}>
        <Typography className={styles.title}>{title}</Typography>
        <Typography className={styles.subheader}>{description}</Typography>
      </Item>
      <Item position={'right'} mr={-0.5}>
        <StyledTooltip title={'See details'}>
          <IconButton classes={iconBtnStyles}>
            <CallMade />
          </IconButton>
        </StyledTooltip>
      </Item>
    </Row>
  );
};

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
    color: '#495869',
  },
}));

type BasicProfileProps = {
  creators: Array<{ face: string; name: string; link: string }>;
} & RowProps;

const BasicProfile = ({ creators, ...props }: BasicProfileProps) => {
  const styles = useBasicProfileStyles();
  return (
    <Row gutter={'inherit'} {...props}>
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
      <Item position={'middle'} pl={{ xs: 1, sm: 1.5 }}>
        <Typography className={styles.overline}>
          {creators.length > 1 ? 'CREATORS' : 'CREATOR'}
        </Typography>
        <Typography className={styles.name}>
          {creators.map((c, i) => (
            <React.Fragment key={c.name}>
              {c.link ? (
                <a href={c.link} target="_blank" rel="noopener noreferrer">
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
    </Row>
  );
};

const useStyles = makeStyles(({ breakpoints }) => ({
  card: {
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#5B9FED',
    },
  },
  frame: {
    justifyContent: 'flex-start',
    [breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
}));

export type IMetadata = {
  path: string,
  colSpan?: 1 | 2 | 3 | 4,
  rowSpan?: 2 | 3 | 4,
  createdAt?: string,
  files?: Array<{ pkg: 'mui-styles' | 'mui-components'; path: string }>
}

export type ShowcaseProps = {
  variant?: 'row' | 'column';
  frameProps?: BoxProps;
  status?: string;
} & Pick<CardHeaderProps, 'title' | 'description'> &
  Pick<BasicProfileProps, 'creators'>;

const Showcase = ({
  title,
  description,
  creators = [],
  variant = 'column',
  children,
  frameProps = {},
  status,
}: React.PropsWithChildren<ShowcaseProps>) => {
  const styles = useStyles();
  const commonProps = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    bgcolor: '#F4F7FA',
    borderRadius: 8,
    p: 2,
    ...status && { pt: 5 },
    minHeight: 160,
    overflow: 'auto',
    className: cx(frameProps.className, styles.frame),
  };
  if (variant === 'row') {
    return (
      <Row className={styles.card} gutter={{ xs: 1, sm: 1.5, lg: 2 }}>
        <Item grow>
          <Box {...commonProps} {...frameProps}>
            {status === 'new' && <StyledStatusChip />}
            {children}
          </Box>
        </Item>
        <Column gutter={'inherit'}>
          <CardHeader title={title} description={description} />
          <BasicProfile position={'bottom'} creators={creators} />
        </Column>
      </Row>
    );
  }
  return (
    <Column className={styles.card} gutter={{ xs: 1, sm: 1.5, lg: 2 }}>
      <CardHeader title={title} description={description} />
      <Item>
        <Box {...commonProps} {...frameProps}>
          {status === 'new' && <StyledStatusChip />}
          {children}
        </Box>
      </Item>
      <BasicProfile creators={creators} />
    </Column>
  );
};

export default Showcase;
