/* eslint-disable */
import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import PeaIcon from '../lib/PeaIcon';
import PeaTypography from '../lib/PeaTypography';

const Typography = () => (
  <Box textAlign={'left'}>
    <Box pb={2}>
      <PeaTypography variant={'h6'} gutterBottom weight={'bold'}>
        <PeaIcon push={'right'}>description</PeaIcon>
        Heading 6
      </PeaTypography>
      <PeaTypography indent={'small'} align={'justify'}>
        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s
      </PeaTypography>
    </Box>
    <Box pb={2}>
      <PeaTypography variant={'body1'}>
        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting
        industry. <code>Lorem Ipsum</code> has been the industry standard dummy
        text ever since the 1500s
      </PeaTypography>
    </Box>
    <div>
      <PeaTypography variant={'subtitle1'}>
        <Link
          color={'secondary'}
          variant={'subtitle1'} // needed
          component={'button'}
          onClick={() => alert('Clicked')}
        >
          <PeaIcon size={'small'}>far fa-rocket</PeaIcon>
          Lorem Ipsum
        </Link>{' '}
        is simply dummy text of the printing and typesetting industry.{' '}
      </PeaTypography>
    </div>
  </Box>
);

Typography.metadata = {
  name: 'Pea Typography',
};
Typography.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Typography.code = `
  import Box from '@material-ui/core/Box';
  import Link from '@material-ui/core/Link';
  import PeaIcon from '../lib/PeaIcon';
  import PeaTypography from '../lib/PeaTypography';
  
  const Preview = () => (
    <Box textAlign={'left'}>
      <Box pb={2}>
        <PeaTypography variant={'h6'} gutterBottom weight={'bold'}>
          <PeaIcon push={'right'}>description</PeaIcon>
          Heading 6
        </PeaTypography>
        <PeaTypography indent={'small'} align={'justify'}>
          <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s
        </PeaTypography>
      </Box>
      <Box pb={2}>
        <PeaTypography variant={'body1'}>
          <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting
          industry. <code>Lorem Ipsum</code> has been the industry standard dummy
          text ever since the 1500s
        </PeaTypography>
      </Box>
      <div>
        <PeaTypography variant={'subtitle1'}>
          <Link
            color={'secondary'}
            variant={'subtitle1'} // needed
            component={'button'}
            onClick={() => alert('Clicked')}
          >
            <PeaIcon size={'small'}>far fa-rocket</PeaIcon>
            Lorem Ipsum
          </Link>{' '}
          is simply dummy text of the printing and typesetting industry.{' '}
        </PeaTypography>
      </div>
    </Box>
  )
`;

export default Typography;
