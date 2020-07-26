import React from 'react';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import { useTranslucentEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/translucent';

export const TranslucentEmailSubscribeStyle = React.memo(
  function TranslucentEmailSubscribe() {
    return (
      <>
        <EmailSubscribe
          useStyles={useTranslucentEmailSubscribeStyles}
          onSubmit={email => alert(`Your email is ${email}.`)}
          inputClearedAfterSubmit
        >
          <EmailTextInput placeholder="Enter your email" />
          <SubmitButton>Subscribe</SubmitButton>
        </EmailSubscribe>
      </>
    );
  }
);
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Translucent'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
    frameProps={{ bgcolor: '#f9f9f9' }}
  >
    <TranslucentEmailSubscribeStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/emailSubscribe/translucent',
  colSpan: 6,
  rowSpan: 2,
  createdAt: 'Sat Jul 25 2020',
  files: [
    {
      pkg: 'mui-styles',
      path: 'emailSubscribe/translucent/translucentEmailSubscribe.styles.ts',
    },
  ],
};
// @ts-ignore
TranslucentEmailSubscribeStyle.Showcase = AttachedShowcase;
// @ts-ignore
TranslucentEmailSubscribeStyle.metadata = metadata;
// hide-end
