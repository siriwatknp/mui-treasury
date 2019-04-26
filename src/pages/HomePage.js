/* eslint-disable spaced-comment,max-len */
import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from 'components/atoms/Box';
import Text from 'components/predefined/Typography';
import ProfileWidget from 'components/organisms/ProfileWidget';

const HomePage = () => (
  <Box width={'100%'}>
    <Grid container justify={'center'}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box my={4.5} px={{ xs: 2, md: 4 }}>
          <Box mb={4}>
            <Text size={'big'}>
              MUI Treasury is a collection of ready-to-use and themeable
              components base on{' '}
              <Link target={'_blank'} href={'https://material-ui.com/'}>
                Material-UI
              </Link>
              .
            </Text>
          </Box>
          <Text variant={'h5'} weight={900} gutterBottom>
            Mission
          </Text>
          <Box p={2} mb={4} bgcolor={'grey.100'} borderRadius={12}>
            <Text align={'center'} size={'big'}>
              To <b>boost</b> any projects that want to shake the world, so that
              our <b>future</b> is better than today.
            </Text>
          </Box>

          <Text variant={'h5'} weight={900}>
            Objectives
          </Text>
          <Text size={'big'} gutterBottom>
            There are 3 main objectives of these project.
          </Text>
          <Box ml={{ xs: 0, sm: 3 }}>
            <Box mb={4}>
              <Text variant={'subtitle1'} weight={'bold'} gutterBottom>
                1. Make theming easy for almost everyone
              </Text>
              <Text fontWeight={200}>
                I have been using Material-ui for a long time and I am a fan of
                it. In v0.x, theming and overrides was hard because it implement{' '}
                <Link
                  target={'_blank'}
                  href={'https://reactjs.org/docs/dom-elements.html#style'}
                >
                  inline-style
                </Link>{' '}
                as styling technique. Huge changes was made in v1.x, material-ui
                core team change from inline-style to{' '}
                <Link target={'_blank'} href={'https://cssinjs.org'}>
                  CSS-in-JS
                </Link>{' '}
                for styling components. It made theming and overriding easier
                than the previous version. However, it is still hard for new
                comers to adjust even a minor things.
              </Text>
            </Box>
            <Box mb={4}>
              <Text variant={'subtitle1'} weight={'bold'} gutterBottom>
                2. Quick start new project with ready-to-use components
              </Text>
              <Text fontWeight={200}>
                When writing components along with other logic, that can be
                painful. As a result, a lot of bugs occur. I want this project
                to be a place that you can look for components that you like,
                then customize a little bit, and finally copy to your project. I
                hope that this will help you focus on the logic of the web and
                release new great features to the world faster.
              </Text>
            </Box>
            <Box mb={4}>
              <Text variant={'subtitle1'} weight={'bold'} gutterBottom>
                3. Increase productivity
              </Text>
              <Text>
                I have seen a lot of developers struggled with building
                components instead of creating new features. I really love
                building UI, but it is not for everyone right? So, I want this
                project to be a place that you can copy the component that you
                like and paste it into your project, so that you have more time
                to focus on the other parts that you love. Imaging if we have
                thousands of components that we can choose from with fully under
                your control. It is the world I want to live in.
              </Text>
            </Box>
            {/*<Text variant={'subtitle1'} fontWeight={'bold'} gutterBottom>*/}
            {/*3. I love Material-UI*/}
            {/*</Text>*/}
            {/*<Text variant={'body1'} fontWeight={200}>*/}
            {/*Material-ui is maintained by a great team. They believe in*/}
            {/*building great ui components which I also believe that too. The*/}
            {/*project is an open-source that has more than 43000+ star in github*/}
            {/*and 1000+ contributors. The core team has great vision and*/}
            {/*roadmap. That’s why I believe that this project will keep*/}
            {/*improving and making the best ui components for our community.*/}
            {/*</Text>*/}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box position={'sticky'} mt={5} top={40} px={{ sm: 0, md: 2, lg: 4 }}>
          <ProfileWidget />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
