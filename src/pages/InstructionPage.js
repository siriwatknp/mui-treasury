/* eslint-disable spaced-comment,max-len,react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Box from 'components/atoms/Box';
import Text from 'components/atoms/Text';
import Image from 'components/atoms/Image';
import step1 from 'assets/images/step-1.1.png';
import step2 from 'assets/images/step-1.2.png';
import step3 from 'assets/images/step-1.3.png';
import step4 from 'assets/images/step-2.1.png';
import step5 from 'assets/images/step-2.2.png';
import step6 from 'assets/images/step-2.5.png';
import step7 from 'assets/images/step-2.6.png';
import medal from 'assets/images/medal.png';

const InstructionPage = ({ width }) => (
  <Box maxWidth={{ xs: 343, sm: 460, md: 700, lg: 960 }} mx={'auto'}>
    <Text
      variant={'h3'}
      align={'center'}
      mt={{ xs: 4, md: 8 }}
      mb={1}
      mr={{ lg: 20 }}
      fontWeight={200}
      letterSpacing={2}
    >
      How to treasure
    </Text>
    <Text variant={'h6'} align={'center'} mr={{ lg: 20 }} color={'grey.500'}>
      3 steps to complete
    </Text>
    <Box my={4.5}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Image maxWidth={200} m={'auto'} src={step1} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            mx={{ md: 4, lg: 10 }}
            height={'100%'}
            {...Box.justifyCenterColumn}
          >
            <Text variant={'h4'} my={2} fontWeight={900} color={'primary.main'}>
              First, choose component
            </Text>
            <Text mb={1} fontSize={20} fontWeight={200}>
              The components section on the left let you explore which type you
              are looking for.
            </Text>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box my={2}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Image src={step2} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box mx={{ md: 4, lg: 10 }} height={'100%'} {...Box.allCenter}>
            <Text mb={1} fontSize={20} fontWeight={200}>
              When you find what you love, for example this "Sunshine Button",
              you can <b>magnify</b> it to see the component's theme.
            </Text>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box my={2}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Image src={step3} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box mx={{ md: 4, lg: 10 }} height={'100%'} {...Box.allCenter}>
            <Text mb={1} fontSize={20} fontWeight={200}>
              Open <b>Code Sandbox</b> here! to copy JSX and adjust any
              appearance if you like.
            </Text>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box my={8} maxWidth={{ sm: 460 }} mx={'auto'}>
      <Text
        variant={'h4'}
        fontWeight={900}
        my={4}
        textAlign={{ md: 'center' }}
        color={'primary.main'}
      >
        Second, copy theme and jsx
      </Text>
      <Image src={step4} />
      <Image src={step5} />
      <Text my={1} fontSize={20} fontWeight={200}>
        Remember that if you change the primary color or any variables, the
        global theme will change. When you satisfy with everything, click copy
        in the top-right of the section.
      </Text>
    </Box>
    <Box my={4.5}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box mx={{ md: 4 }} height={'100%'} {...Box.justifyCenterColumn}>
            <Text variant={'h4'} my={2} fontWeight={900} color={'primary.main'}>
              Finally, paste to project
            </Text>
            <Text mb={1} fontSize={20} fontWeight={200}>
              Your app must set up <code>ThemeProvider</code> in order to make
              it work. Add global theme and component's theme at the comment
              line as in the picture.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={step6} />
        </Grid>
      </Grid>
    </Box>
    <Box my={2}>
      <Grid
        container
        direction={isWidthUp('md', width) ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={6}>
          <Box mx={{ md: 4 }} height={'100%'} {...Box.allCenterColumn}>
            <Text
              variant={'h5'}
              fontWeight={200}
              align={'center'}
              lineHeight={2}
              mb={4}
            >
              At last, Your code should look like this.
              <br />
              <b>Congratulations</b> ! You made it.
            </Text>
            <Image maxWidth={160} src={medal} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={step7} />
        </Grid>
      </Grid>
    </Box>
  </Box>
);

InstructionPage.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(InstructionPage);
