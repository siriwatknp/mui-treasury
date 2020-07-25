import React from 'react';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import { useBootstrapEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/bootstrap';

export const BootstrapEmailSubscribeStyle = React.memo(
  function BootstrapEmailSubscribe() {
    return (
      <>
        <EmailSubscribe
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
    title={'Bootstrap'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <BootstrapEmailSubscribeStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/emailSubscribe/bootstrap',
  colSpan: 4,
  createdAt: 'Sat Jul 25 2020',
  files: [
    {
      pkg: 'mui-styles',
      path: 'emailSubscribe/bootstrap/bootstrapEmailSubscribe.styles.ts',
    },
  ],
};
// @ts-ignore
BootstrapEmailSubscribeStyle.Showcase = AttachedShowcase;
// @ts-ignore
BootstrapEmailSubscribeStyle.metadata = metadata;
// hide-end
