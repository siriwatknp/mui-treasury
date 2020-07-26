import React from 'react';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import { useMinimalEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/minimal';
import FormLabel from '@material-ui/core/FormLabel';
import Send from '@material-ui/icons/Send';

export const MinimalEmailSubscribeStyle = React.memo(
  function MinimalEmailSubscribe() {
    return (
      <div>
        <FormLabel htmlFor={'newsletter'} >
          Newsletter
        </FormLabel>
        <EmailSubscribe
          onSubmit={email => alert(`Your email is ${email}.`)}
          useStyles={useMinimalEmailSubscribeStyles}
          inputClearedAfterSubmit
        >
          <EmailTextInput id={'newsletter'} placeholder="Enter your email" />
          <SubmitButton aria-label="subscribe">
            <Send />
          </SubmitButton>
        </EmailSubscribe>
      </div>
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
    title={'Minimal'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    frameProps={{ bgcolor: '#fff' }}
    hasDarkTheme
  >
    <MinimalEmailSubscribeStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/emailSubscribe/minimal',
  colSpan: 4,
  createdAt: 'Sun Jul 26 2020',
  files: [
    {
      pkg: 'mui-styles',
      path: 'emailSubscribe/minimal/minimalEmailSubscribe.styles.ts',
    },
  ],
};
// @ts-ignore
MinimalEmailSubscribeStyle.Showcase = AttachedShowcase;
// @ts-ignore
MinimalEmailSubscribeStyle.metadata = metadata;
// hide-end
