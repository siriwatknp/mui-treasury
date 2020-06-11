import React from 'react';
import cx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Box, { BoxProps } from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// Icons
// import CallMade from '@material-ui/icons/CallMade';

// @mui-treasury
// import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { Column, ColumnToRow, Item, Row } from '@mui-treasury/components/flex';
import StatusChip from '../atoms/StatusChip';

const StyledStatusChip = withStyles({
  root: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
})(StatusChip);

// const StyledTooltip = withStyles({
//   tooltip: {
//     marginTop: '0.2rem',
//     backgroundColor: 'rgba(0,0,0,0.72)',
//     color: '#fff',
//   },
// })(Tooltip);

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
} & BoxProps;

const CardHeader = ({ title, description, ...props }: CardHeaderProps) => {
  const styles = useCardHeaderStyles();
  // const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={'middle'}>
        <Typography className={styles.title}>{title}</Typography>
        <Typography className={styles.subheader}>{description}</Typography>
      </Item>
      <Item position={'right'} mr={-0.5}>
        {/*<StyledTooltip title={'See details'}>*/}
        {/*  <IconButton classes={iconBtnStyles}>*/}
        {/*    <CallMade />*/}
        {/*  </IconButton>*/}
        {/*</StyledTooltip>*/}
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
  actions?: React.ReactNode;
} & BoxProps;

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
      <Item position={'middle'} pl={{ sm: 0.5 }}>
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
      {actions}
    </Row>
  );
};

const useStyles = makeStyles(({ breakpoints }) => ({
  card: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderColor: '#E7EDF3',
    transition: '0.4s',
    [breakpoints.up('sm')]: {
      border: '2px solid #E7EDF3',
      borderRadius: 12,
      '&:hover': {
        borderColor: '#5B9FED',
      },
    },
    [breakpoints.up('lg')]: {
      borderRadius: 16,
    },
  },
  frame: {
    justifyContent: 'flex-start',
    [breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
  hiddenXs: {
    [breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  hiddenAboveXs: {
    [breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export type RowSpan = 1 | 2 | 3;
export type ColSpan = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12;

export type ColSpanProp =
  | ColSpan
  | Partial<Record<'sm' | 'md' | 'lg' | 'xl', ColSpan>>;

export type RowSpanProp =
  | RowSpan
  | Partial<Record<'sm' | 'md' | 'lg' | 'xl', RowSpan>>;

export type IMetadata = {
  path: string;
  colSpan?: ColSpanProp;
  rowSpan?: RowSpanProp;
  frameProps?: BoxProps;
  createdAt?: string;
  files?: Array<{ pkg: 'mui-styles' | 'mui-components'; path: string }>;
};

export type ShowcaseProps = {
  variant?: 'row' | 'column';
  frameProps?: BoxProps;
  status?: string;
} & Pick<CardHeaderProps, 'title' | 'description'> &
  Pick<BasicProfileProps, 'creators' | 'actions'>;

const Showcase = ({
  title,
  description,
  creators = [],
  actions,
  variant = 'column',
  children,
  frameProps = {},
  status,
}: React.PropsWithChildren<ShowcaseProps>) => {
  const styles = useStyles();
  const commonProps = {
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    bgcolor: '#F4F7FA',
    borderRadius: 8,
    p: 2,
    ...(status && { pt: 5 }),
    minHeight: 160,
    overflow: 'auto',
    className: cx(frameProps.className, styles.frame),
  };
  if (variant === 'row') {
    return (
      <ColumnToRow
        className={styles.card}
        rowStyle={{ alignItems: 'unset' }}
        at={'sm'}
        gap={{ xs: 1, sm: 1.5, lg: 2 }}
      >
        <Column grow minWidth={0}>
          <CardHeader
            className={styles.hiddenAboveXs}
            title={title}
            description={description}
          />
          <Item grow pt={{ xs: 1, sm: 0 }}>
            <Box {...commonProps} {...frameProps}>
              {status === 'new' && <StyledStatusChip />}
              {children}
            </Box>
          </Item>
        </Column>
        <Column>
          <CardHeader
            className={styles.hiddenXs}
            title={title}
            description={description}
          />
          <BasicProfile
            pt={0}
            position={'bottom'}
            creators={creators}
            actions={actions}
          />
        </Column>
      </ColumnToRow>
    );
  }
  return (
    <Column className={styles.card} gap={{ xs: 1, sm: 1.5, lg: 2 }}>
      <CardHeader title={title} description={description} />
      <Item grow>
        <Box {...commonProps} {...frameProps}>
          {status === 'new' && <StyledStatusChip />}
          {children}
        </Box>
      </Item>
      <BasicProfile creators={creators} actions={actions} />
    </Column>
  );
};

export default Showcase;
