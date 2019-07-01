import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from 'extensions/Icon';
import Button from 'extensions/Button';
import Typography from 'extensions/Typography';

const useStyles = makeStyles(({ transitions, palette, spacing }) => ({
  appBarBg: {
    zIndex: 1098,
  },
  searchBox: ({ trigger }) => ({
    transition: transitions.create('top', {
      easing: transitions.easing.sharp,
    }),
    top: trigger ? 0 : 56,
    zIndex: 1099,
  }),
  searchInput: {
    color: palette.common.white,
    margin: spacing(1),
    padding: spacing(1),
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  listItemText: {
    letterSpacing: '1px',
    fontWeight: 500,
  },
  subList: {
    backgroundColor: '#f8f8f8',
  },
}));

const AmiMiniHeader = ({ menus }) => {
  const trigger = useScrollTrigger();
  const classes = useStyles({ trigger });
  const [opened, setOpened] = useState(false);
  const [collapsedIndex, setCollapsedIndex] = useState([null, null, null]);
  const updateByIndex = (val, level) => {
    setCollapsedIndex(
      collapsedIndex.map((item, i) => (i === level ? val : item)),
    );
  };
  // eslint-disable-next-line react/prop-types
  const renderItem = (level = 0) => ({ icon, label, children }, index) => {
    const collapsed = collapsedIndex[level];
    const listItemText = (
      <ListItemText
        key={label}
        style={{
          paddingLeft: (level - 1) * 20 + (level === 0 ? 0 : 28),
          marginLeft: level === 0 && !icon ? 28 : 0,
        }}
        classes={{ primary: classes.listItemText }}
        primary={label}
      />
    );
    if (!children) {
      return (
        <>
          <ListItem button key={label}>
            {icon && (
              <Icon size={'small'} push={'right'}>
                {icon}
              </Icon>
            )}
            {listItemText}
          </ListItem>
          {level === 0 && <Divider light />}
        </>
      );
    }
    return (
      <>
        <ListItem
          button
          onClick={() =>
            updateByIndex(collapsed === index ? null : index, level)
          }
        >
          {icon && (
            <Icon size={'small'} push={'right'}>
              {icon}
            </Icon>
          )}
          {listItemText}
          {collapsedIndex[level] === index ? (
            <Icon>expand_less</Icon>
          ) : (
            <Icon>expand_more</Icon>
          )}
        </ListItem>
        <Collapse
          in={collapsedIndex[level] === index}
          timeout="auto"
          unmountOnExit
        >
          <List className={classes.subList} component="div" disablePadding>
            {children.map(renderItem(level + 1))}
          </List>
        </Collapse>
        {level === 0 && <Divider light />}
      </>
    );
  };
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={1}>
          <Toolbar>
            <Grid container spacing={1} alignItems={'center'}>
              <Grid item>
                <Button
                  icon={'far fa-bars'}
                  shape={'circular'}
                  inverted
                  onClick={() => setOpened(true)}
                />
              </Grid>
              <Grid item xs>
                <Typography variant={'h5'} weight={900} spacing={'big'}>
                  AMIGO
                </Typography>
              </Grid>
              <Grid item>
                <Button icon={'far fa-user'} shape={'circular'} inverted />
              </Grid>
              <Grid item>
                <Button
                  icon={'far fa-shopping-cart'}
                  shape={'circular'}
                  inverted
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>
      <AppBar position={'sticky'} elevation={0} className={classes.appBarBg}>
        <Toolbar />
      </AppBar>
      <AppBar className={classes.searchBox} elevation={2} position={'sticky'}>
        <InputBase
          className={classes.searchInput}
          placeholder={'Type to search...'}
        />
      </AppBar>
      <Drawer open={opened} onClose={() => setOpened(false)}>
        <Box minWidth={320}>
          <ListItem>
            <ListItemIcon>
              <Button
                shape={'circular'}
                icon={'close'}
                onClick={() => setOpened(false)}
              />
            </ListItemIcon>
          </ListItem>
          <Divider light />
          {menus.map(renderItem(0))}
        </Box>
      </Drawer>
    </>
  );
};

AmiMiniHeader.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
};
AmiMiniHeader.defaultProps = {
  menus: [],
};

export default AmiMiniHeader;
