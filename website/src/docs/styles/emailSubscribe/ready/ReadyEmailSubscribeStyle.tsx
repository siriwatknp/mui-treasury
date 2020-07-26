import React from 'react';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready';

export const ReadyEmailSubscribeStyle = React.memo(
  function ReadyEmailSubscribe() {
    return (
      <EmailSubscribe
        onSubmit={email => alert(`Your email is ${email}.`)}
        useStyles={useReadyEmailSubscribeStyles}
        inputClearedAfterSubmit
      >
        <EmailTextInput placeholder="Enter your email" />
        <SubmitButton>Subscribe</SubmitButton>
      </EmailSubscribe>
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
    title={'Ready'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <ReadyEmailSubscribeStyle />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'styles/emailSubscribe/ready',
  colSpan: 5,
  createdAt: 'Sun Jul 26 2020',
  files: [{ pkg: 'mui-styles', path: 'emailSubscribe/ready/readyEmailSubscribe.styles.ts' }],
};
// @ts-ignore
ReadyEmailSubscribeStyle.Showcase = AttachedShowcase
// @ts-ignore
ReadyEmailSubscribeStyle.metadata = metadata
// hide-end
