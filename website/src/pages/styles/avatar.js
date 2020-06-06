import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import * as components from '../../docs/styles/avatar';
import ComponentHeading from '../../components/organisms/ComponentHeading';
import { orderIndex, getStatusByDate } from '../../utils/functions2';

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      padding: 8,
      [breakpoints.only('xs')]: {
        '& > div:not(:first-child)': {
          paddingTop: 8,
        },
      },
      [breakpoints.up('sm')]: {
        padding: 16,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 160,
        gridAutoFlow: 'dense',
        gridGap: 16,
      },
      [breakpoints.up(1440)]: {
        padding: 24,
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: 24,
      },
    },
  }),
  { name: 'GridContainer' }
);

const AvatarStylesPage = () => {
  const styles = useStyles();
  return (
    <div>
      <ComponentHeading
        title={'Avatar'}
        description={'A collection of Avatar components'}
      />
      <div className={styles.root}>
        {orderIndex(components).map(Component => {
          const { colSpan = 1, rowSpan = 2, createdAt } =
            Component?.metadata ?? {};
          return (
            <Box
              key={Component.name}
              display={'flex'}
              flexDirection={'column'}
              gridColumn={`span ${colSpan}`}
              gridRow={`span ${rowSpan}`}
              css={{
                '& > .FlexItem': {
                  height: '100%',
                },
              }}
            >
              <Component.Showcase
                variant={colSpan >= 3 ? 'row' : 'column'}
                status={getStatusByDate(createdAt)}
              />
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default AvatarStylesPage;
