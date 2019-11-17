import React from 'react';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import ToggleMenuItem from '@mui-treasury/components/menuItem/toggle';
import { useMaterialToggleMenuItemStyles } from '@mui-treasury/styles/menuItem/toggle/material';
import { useSmallIconStyles } from '@mui-treasury/styles/icon/small';

const MaterialToggleMenuItemDemo = () => {
  const [expanded, setExpanded] = React.useState(false);
  const styles = useMaterialToggleMenuItemStyles();
  const sIconStyles = useSmallIconStyles();
  return (
    <Box minWidth={256}>
      <ToggleMenuItem
        expanded={expanded}
        className={styles.root}
        symbolClassName={styles.symbol}
        onToggle={() => setExpanded(!expanded)}
      >
        Default symbol
      </ToggleMenuItem>
      <ToggleMenuItem
        expanded={expanded}
        className={styles.root}
        renderSymbol={() =>
          expanded ? (
            <Remove className={cx(sIconStyles.root, styles.symbol)} />
          ) : (
            <Add className={cx(sIconStyles.root, styles.symbol)} />
          )
        }
        onToggle={() => setExpanded(!expanded)}
      >
        Custom symbol
      </ToggleMenuItem>
    </Box>
  );
};

// hide-start
MaterialToggleMenuItemDemo.metadata = {
  title: 'Material Toggle',
  path: 'menuItem/toggle/material',
  files: [
    {
      pkg: 'mui-styles',
      path: 'menuItem/toggle/material/materialToggleMenuItem.styles.js',
    },
    { pkg: 'mui-styles', path: 'icon/small/smallIcon.styles.js' },
    { pkg: 'mui-components', path: 'menuItem/toggle/ToggleMenuItem.js' },
  ],
  relates: [],
};
// hide-end

export default MaterialToggleMenuItemDemo;
