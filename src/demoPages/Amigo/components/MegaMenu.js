import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    margin: '0 auto',
    paddingTop: 8,
    height: 64,
  },
  tabsRoot: {},
  tabsIndicator: {
    maxWidth: 56,
    transform: 'translateX(52px)',
    backgroundColor: palette.grey[200],
  },
  tab: {
    color: palette.common.white,
    opacity: 1,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: '1px',
    minWidth: 160,
  },
  collapsed: {
    position: 'absolute',
    left: 0,
    top: 64,
    width: '100%',
  },
  paper: {
    minHeight: 240,
  },
  subheader: {
    fontWeight: 'bold',
  },
}));

const MegaMenu = ({ menus, subMenus }) => {
  const [tabIndex, setTabIndex] = useState();
  const classes = useStyles();
  return (
    <div className={classes.root} onMouseLeave={() => setTabIndex(undefined)}>
      <Tabs
        centered
        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        value={tabIndex}
      >
        {menus.map((item, index) => (
          <Tab
            key={item.label}
            {...item}
            className={classes.tab}
            onMouseOver={() => setTabIndex(index)}
            onFocus={() => setTabIndex(index)}
          />
        ))}
      </Tabs>
      <Collapse in={tabIndex >= 0} className={classes.collapsed}>
        <Paper elevation={2} className={classes.paper}>
          <Container maxWidth={'md'}>
            <Grid container justify={'center'}>
              {subMenus.map(({ label, children }) => (
                <Grid key={label} item xs={3}>
                  <List
                    subheader={
                      <ListSubheader
                        className={classes.subheader}
                        disableSticky
                      >
                        {label}
                      </ListSubheader>
                    }
                  >
                    {children.map(subLabel => (
                      <ListItem key={subLabel} button>
                        <ListItemText primary={subLabel} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Paper>
      </Collapse>
    </div>
  );
};

MegaMenu.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ),
  subMenus: PropTypes.arrayOf(PropTypes.shape({})),
};
MegaMenu.defaultProps = {
  menus: [],
  subMenus: [],
};

export default MegaMenu;
