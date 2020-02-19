import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OrgChart from '@mui-treasury/components/chart/org';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  avatar: {
    width: 64,
    height: 64,
  },
  name: {
    fontFamily: 'fira sans',
    fontWeight: 'bold',
    fontSize: 14,
    whiteSpace: 'nowrap',
    marginTop: 4,
  },
  position: {
    verticalAlign: 'super',
  },
}));

const OrgChartDemo = () => {
  const styles = useStyles();
  return (
    <OrgChart
      spacingX={24}
      treeData={getData()}
      renderContent={({ src, name, position }) => (
        <Box align={'center'}>
          <Avatar className={styles.avatar} src={src} />
          <Typography className={styles.name} variant={'h6'}>
            {name}
          </Typography>
          <Typography
            className={styles.position}
            color={'textSecondary'}
            variant={'caption'}
          >
            {position}
          </Typography>
        </Box>
      )}
    />
  );
};
// hide-start
OrgChartDemo.metadata = {
  title: 'Organization',
  path: 'chart/org',
  description: 'Extends tree to form company component',
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sun Feb 16 2020',
  size: 'large',
  files: [
    { pkg: 'mui-components', path: 'chart/org/OrgChart.js' },
    { pkg: 'mui-components', path: 'chart/org/OrgChart.stories.js' },
  ],
};
// hide-end
const getData = () => ({
  name: 'JunZaa',
  position: 'CEO',
  src:
    'https://pbs.twimg.com/profile_images/1170533117620129796/HpDoPJZG_400x400.jpg',
  children: [
    {
      name: 'Husna Childs',
      position: 'CIO',
      src: 'https://i.pravatar.cc/300?img=10',
      children: [
        {
          name: 'Raihan Moon',
          position: 'Manager',
          src: 'https://i.pravatar.cc/300?img=20',
        },
        {
          name: 'Calista Hines',
          position: 'Manager',
          src: 'https://i.pravatar.cc/300?img=30',
        },
      ],
    },
    {
      name: 'Iona Reyes',
      position: 'CFO',
      src: 'https://i.pravatar.cc/300?img=40',
    },
    {
      name: 'Fred Frank',
      position: 'CMO',
      src: 'https://i.pravatar.cc/300?img=50',
    },
  ],
});

export default OrgChartDemo;
