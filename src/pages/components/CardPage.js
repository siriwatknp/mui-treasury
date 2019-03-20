import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import EngagementCard01 from 'components/cards/EngagementCard01';
import PostCard01 from 'components/cards/PostCard01';
import PostCard02 from 'components/cards/PostCard02';
import NewsCard01 from 'components/cards/NewsCard01';
import NewsCard02 from 'components/cards/NewsCard02';
import ProjectCard01 from 'components/cards/ProjectCard01';
import ReviewCard01 from 'components/cards/ReviewCard01';
import RewardCard01 from 'components/cards/RewardCard01';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const components = [
  {
    component: EngagementCard01,
    render: () => <EngagementCard01 />,
  },
  {
    component: PostCard01,
    render: () => <PostCard01 />,
  },
  {
    component: NewsCard01,
    render: () => <NewsCard01 />,
  },
  {
    component: NewsCard02,
    render: () => <NewsCard02 />,
  },
  {
    component: ReviewCard01,
    render: () => <ReviewCard01 />,
  },
  {
    component: ProjectCard01,
    render: () => <ProjectCard01 />,
  },
  {
    component: PostCard02,
    render: () => <PostCard02 />,
    gridItemProps: {
      lg: 6,
    },
  },
  {
    component: RewardCard01,
    render: () => <RewardCard01 />,
    gridItemProps: {
      lg: 6,
    },
  },
];

const CardPage = ({ counter, globalTheme, onSelectComponent }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
    css={{
      '& .PreviewWidget-root': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    }}
  >
    <CssBaseline />
    <Grid container spacing={32} justify={'center'}>
      {components.map(({ component, render, gridItemProps, previewProps }) => (
        <Grid
          key={get(component, 'metadata.name')}
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          {...gridItemProps}
        >
          <PreviewWidget
            sandboxLink={component.codeSandbox}
            onClick={() => onSelectComponent(component)}
            {...get(component, 'metadata')}
            {...previewProps}
          >
            <ShouldUpdate value={counter}>
              <MuiThemeProvider
                theme={createTheme({
                  ...globalTheme,
                  overrides: component.getTheme(merge(baseTheme, globalTheme)),
                })}
              >
                {render()}
              </MuiThemeProvider>
            </ShouldUpdate>
          </PreviewWidget>
        </Grid>
      ))}
    </Grid>
  </Box>
);

CardPage.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
CardPage.components = components;

export default CardPage;
