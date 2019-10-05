import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import {
  ShinningButton,
  GradientButton,
  GithubButton,
  FirebaseButton,
  TwitterButton,
} from 'docs/components/buttons';

const components = [
  {
    component: ShinningButton,
    render: () => <ShinningButton />,
  },
  {
    component: GradientButton,
    render: () => <GradientButton.Demo />,
  },
  {
    component: GithubButton,
    render: () => <GithubButton.Demo />,
  },
  {
    component: FirebaseButton,
    render: () => <FirebaseButton.Demo />,
  },
  {
    component: TwitterButton,
    render: () => <TwitterButton.Demo />,
  },
];

const ButtonPage = createSimpleShowcase(components);

export default ButtonPage;
