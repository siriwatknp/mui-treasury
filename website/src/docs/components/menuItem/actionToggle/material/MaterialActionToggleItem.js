import React from 'react';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import Add from '@material-ui/icons/AddCircleRounded';
import Remove from '@material-ui/icons/RemoveCircleRounded';
import ActionToggleItem from '@mui-treasury/components/menuItem/actionToggle';
import { useMaterialActionToggleItemStyles } from '@mui-treasury/styles/menuItem/actionToggle/material';
import { useSmallIconStyles } from '@mui-treasury/styles/icon/small';

const MaterialActionToggleItemDemo = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState('');
  const styles = useMaterialActionToggleItemStyles();
  const sIconStyles = useSmallIconStyles();
  return (
    <Box minWidth={256}>
      <ActionToggleItem
        expanded={expanded}
        selected={selectedKey === 'default'}
        classes={styles}
        symbolClassName={styles.symbol}
        onToggle={() => setExpanded(!expanded)}
        onMenuClick={() => setSelectedKey('default')}
      >
        Default symbol
      </ActionToggleItem>
      <ActionToggleItem
        expanded={expanded}
        selected={selectedKey === 'custom'}
        classes={styles}
        renderSymbol={() =>
          expanded ? (
            <Remove className={cx(sIconStyles.root, styles.symbol)} />
          ) : (
            <Add className={cx(sIconStyles.root, styles.symbol)} />
          )
        }
        onToggle={() => setExpanded(!expanded)}
        onMenuClick={() => setSelectedKey('custom')}
      >
        Custom symbol
      </ActionToggleItem>
    </Box>
  );
};

// hide-start
MaterialActionToggleItemDemo.metadata = {
  title: 'Material Action Toggle',
  path: 'component/menuItem/actionToggle/material',
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-styles',
      path: 'menuItem/actionToggle/material/materialActionToggleItem.styles.js',
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

export default MaterialActionToggleItemDemo;
