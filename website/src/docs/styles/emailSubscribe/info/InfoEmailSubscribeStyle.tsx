import React from 'react';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import { useInfoEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/info';
import ArrowForward from '@material-ui/icons/ArrowForward';

export const InfoEmailSubscribeStyle = React.memo(
  function InfoEmailSubscribe() {
    return (
      <EmailSubscribe
        onSubmit={email => alert(`Your email is ${email}.`)}
        useStyles={useInfoEmailSubscribeStyles}
        inputClearedAfterSubmit
      >
        <EmailTextInput placeholder="Email address" />
        <SubmitButton aria-label={'subscribe'}>
          <ArrowForward />
        </SubmitButton>
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
    title={'Info'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <InfoEmailSubscribeStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/emailSubscribe/info',
  colSpan: 4,
  createdAt: 'Sun Jul 26 2020',
  files: [
    {
      pkg: 'mui-styles',
      path: 'emailSubscribe/info/infoEmailSubscribe.styles.ts',
    },
  ],
};
// @ts-ignore
InfoEmailSubscribeStyle.Showcase = AttachedShowcase;
// @ts-ignore
InfoEmailSubscribeStyle.metadata = metadata;
// hide-end
