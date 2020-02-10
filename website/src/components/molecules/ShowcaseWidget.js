import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CodeRounded from '@material-ui/icons/CodeRounded';
import Link from '@material-ui/icons/Link';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Tooltip from '@material-ui/core/Tooltip';
import StatusChip from 'components/atoms/StatusChip';

const useStyles = makeStyles(({ palette }) => ({
  hiddenName: {
    position: 'absolute',
    top: -64,
    opacity: 0,
    pointerEvents: 'none',
  },
  name: {
    margin: 0,
    textDecoration: 'none',
    borderBottom: 'none',
    color: palette.text.primary,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    '& > svg': {
      opacity: 0,
      fontSize: 24,
      transform: 'rotateZ(-45deg) translate(-4px, 0.2em)',
    },
    '&:hover': {
      color: '#007aac',
      borderBottom: 'none',
      '& > svg': {
        opacity: 1,
      },
    },
  },
  creatorLabel: {
    letterSpacing: 1,
    fontSize: 12,
    color: palette.text.secondary,
  },
  creatorName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: -2,
  },
}));

const ShowcaseWidget = ({
  children,
  name,
  creators,
  anchor = name,
  description,
  onClickCode,
  frameProps,
  className,
  status,
  ...props
}) => {
  const styles = useStyles();
  return (
    <Box
      position={'relative'}
      display={'flex'}
      flexDirection={'column'}
      {...props}
      className={cx('Showcase-root', className)}
    >
      <Box
        px={2}
        py={1}
        display={'flex'}
        alignItems={'flex-end'}
        justifyContent={'space-between'}
      >
        <div>
          <h3 className={styles.hiddenName} id={anchor}>
            {name}
          </h3>
          <a href={`#${anchor}`} className={styles.name} aria-label={'Anchor'}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <b>{name}</b> <Link />
          </a>
          {description && (
            <Typography variant={'body2'} color={'textSecondary'}>
              {description}
            </Typography>
          )}
        </div>
        {status === 'new' && <StatusChip />}
      </Box>
      <Box
        mt={2}
        mb={1}
        mx={{ xs: 0, sm: 2 }}
        p={2}
        borderRadius={{ xs: 0, sm: 8 }}
        bgcolor={'grey.50'}
        flex={'auto'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={{
          xs: 200 - 24,
          sm: 240 - 24,
          md: 280 - 24,
        }}
        {...frameProps}
        className={cx('Showcase-frame', frameProps.className)}
      >
        {children}
      </Box>
      <Box p={2} pt={1} display={'flex'} alignItems={'center'}>
        <Box ml={1}>
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
        </Box>
        <Box ml={1.5}>
          {creators.length > 0 && (
            <div className={styles.creatorLabel}>
              {creators.length > 1 ? 'CREATORS' : 'CREATOR'}
            </div>
          )}
          <div className={styles.creatorName}>
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
          </div>
        </Box>
        <Box ml={'auto'}>
          <IconButton onClick={onClickCode}>
            <CodeRounded />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

ShowcaseWidget.propTypes = {
  className: PropTypes.string,
  anchor: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  creators: PropTypes.arrayOf(
    PropTypes.shape({
      face: PropTypes.string,
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  status: PropTypes.oneOf(['', 'new']),
  children: PropTypes.node,
  description: PropTypes.string,
  onClickCode: PropTypes.func,
  frameProps: PropTypes.shape({
    className: PropTypes.string,
  }),
};
ShowcaseWidget.defaultProps = {
  className: '',
  anchor: undefined,
  creators: [],
  status: undefined,
  name: '',
  description: '',
  onClickCode: () => {},
  frameProps: {},
};

export default ShowcaseWidget;
