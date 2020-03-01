import React from 'react';
import Box from '@material-ui/core/Box';
import ActionToggleItem from '@mui-treasury/components/menuItem/actionToggle';
import RotateToggle from '@mui-treasury/components/toggle/rotate';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useGatsbyActionToggleItemStyles } from '@mui-treasury/styles/menuItem/actionToggle/gatsby';

const GatsbyActionToggleItem = () => {
  const [expanded, setExpanded] = React.useState(false);
  const styles = useGatsbyActionToggleItemStyles();
  return (
    <Box minWidth={256}>
      <ActionToggleItem
        expanded={expanded}
        classes={styles}
        renderSymbol={() => (
          <RotateToggle
            component={KeyboardArrowRight}
            className={styles.symbol}
            expanded={expanded}
          />
        )}
        onToggle={() => setExpanded(!expanded)}
      >
        Gatsby Menu
      </ActionToggleItem>
      <ActionToggleItem
        selected
        classes={styles}
        renderSymbol={() => (
          <RotateToggle
            component={KeyboardArrowRight}
            className={styles.symbol}
            expanded={expanded}
          />
        )}
      >
        Selected state
      </ActionToggleItem>
    </Box>
  );
};

// hide-start
GatsbyActionToggleItem.metadata = {
  title: 'Gatsby Action Toggle',
  path: 'component/menuItem/actionToggle/gatsby',
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-styles',
      path: 'menuItem/actionToggle/gatsby/gatsbyActionToggleItem.styles.js',
    },
    { pkg: 'mui-styles', path: 'icon/small/smallIcon.styles.js' },
    {
      pkg: 'mui-components',
      path: 'menuItem/actionToggle/ActionToggleItem.js',
    },
  ],
  relates: [],
};
// hide-end

export default GatsbyActionToggleItem;
