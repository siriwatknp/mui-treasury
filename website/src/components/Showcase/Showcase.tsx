import React, { useState } from 'react';
import cx from 'clsx';
import {
  withStyles,
  ThemeProvider,
  createTheme,
  ThemeOptions,
} from '@material-ui/core/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import Box, { BoxProps } from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BasicProfile, { BasicProfileProps } from './submodules/BasicProfile';
import CardHeader, { CardHeaderProps } from './submodules/CardHeader';

// Icons
import Brightness4 from '@material-ui/icons/Brightness4';
import WbSunny from '@material-ui/icons/WbSunny';

// @mui-treasury
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { Column, ColumnToRow, Item } from '@mui-treasury/components/flex';
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

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  card: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderColor:
      palette.mode === 'dark' ? palette.background.default : '#E7EDF3',
    backgroundColor: palette.mode === 'dark' && palette.background.default,
    transition: '0.4s, background-color 0s',
    [breakpoints.up('sm')]: {
      border: '2px solid',
      borderColor:
        palette.mode === 'dark' ? palette.background.default : '#E7EDF3',
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
  stylesUrl?: string;
};

export type ShowcaseProps = {
  variant?: 'row' | 'column';
  frameProps?: BoxProps;
  status?: string;
  headerAction?: React.ReactNode;
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
  headerAction,
}: React.PropsWithChildren<ShowcaseProps>) => {
  const styles = useStyles();
  const commonProps = {
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
    p: 2,
    ...(status && { pt: 5 }),
    minHeight: 160,
    overflow: 'auto',
    className: cx(frameProps.className, styles.frame),
  };
  return variant === 'row' ? (
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
          action={headerAction}
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
          action={headerAction}
        />
        <BasicProfile
          pt={0}
          position={'bottom'}
          creators={creators}
          actions={actions}
        />
      </Column>
    </ColumnToRow>
  ) : (
    <Column className={styles.card} gap={{ xs: 1, sm: 1.5, lg: 2 }}>
      <CardHeader
        title={title}
        description={description}
        action={headerAction}
      />
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

function withDarkTheme() {
  function EnhancedShowcase({
    theme = {},
    hasDarkTheme,
    frameProps = {},
    ...props
  }: React.PropsWithChildren<
    { theme?: ThemeOptions; hasDarkTheme?: boolean } & ShowcaseProps
  >) {
    const [isDark, setIsDark] = useState(false);
    const iconBtnStyles = useSizedIconButtonStyles({ padding: 8 });

    const action = hasDarkTheme && (
      <StyledTooltip
        title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
      >
        <IconButton classes={iconBtnStyles} onClick={() => setIsDark(!isDark)}>
          {isDark ? <WbSunny /> : <Brightness4 />}
        </IconButton>
      </StyledTooltip>
    );
    if (!theme.palette) theme.palette = {};
    theme.palette.mode = isDark ? 'dark' : 'light';
    return (
      <ThemeProvider theme={createTheme(theme)}>
        <Showcase
          {...props}
          frameProps={{
            ...frameProps,
            bgcolor: isDark ? '#424242' : frameProps.bgcolor || '#F4F7FA',
          }}
          headerAction={action}
        />
      </ThemeProvider>
    );
  }

  return EnhancedShowcase;
}

export default withDarkTheme();
