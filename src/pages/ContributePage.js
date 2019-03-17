/* eslint-disable spaced-comment,max-len,react/no-unescaped-entities */
import React from 'react';
import Link from '@material-ui/core/Link';
import Box from 'components/atoms/Box';
import Text from 'components/atoms/Text';

const InstructionPage = () => (
  <Box maxWidth={{ xs: 343, sm: 400, md: 600, lg: 960 }} mx={'auto'}>
    <Text
      variant={'h3'}
      align={'center'}
      mt={8}
      mb={4}
      mr={{ lg: 20 }}
      fontWeight={200}
      letterSpacing={2}
    >
      I need your help!
    </Text>
    <Text
      align={'center'}
      mr={{ lg: 20 }}
      mb={8}
      fontSize={20}
      color={'grey.700'}
    >
      I am very new to open source project and don't know what best practice is.
      But if you believe what I believe that we can create a treasury that
      collects thousands of real-world, ready-to-use, copy-and-paste components.
      We can help boosting many projects that want to prove their ideas to make
      this world a better place.
    </Text>

    <Text align={'center'} mr={{ lg: 20 }} fontSize={20} color={'grey.700'}>
      <Link
        href={'https://github.com/siriwatknp/mui-treasury'}
        target={'_blank'}
      >
        Please join me
      </Link>
      , you can email me, tweet me, message me anything that you thought it will
      help bringing this cause to life. If you have experience with maintaining
      open source project, feel free to comment and contact me.
    </Text>
  </Box>
);

InstructionPage.propTypes = {};
InstructionPage.defaultProps = {};

export default InstructionPage;
