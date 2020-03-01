import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NestedMenu from './NestedMenu';

describe('NestedMenu', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<NestedMenu menus={getMenus()} />);
    }).not.toThrow();
  });

  it('onOpenKeysChange is called when some menu is toggled', () => {
    const onOpenKeysChange = jest.fn();
    const { getByTestId } = render(
      <NestedMenu
        menus={getMenus()}
        onOpenKeysChange={onOpenKeysChange}
        getActionProps={({ key }) => ({ 'data-testid': `action-${key}` })}
      />
    );
    const toggleBtn = getByTestId('action-refGuides');
    fireEvent.click(toggleBtn);
    expect(onOpenKeysChange).toHaveBeenCalledTimes(1);
    expect(onOpenKeysChange).toHaveBeenCalledWith(['refGuides']);

    fireEvent.click(toggleBtn);
    expect(onOpenKeysChange).toHaveBeenCalledTimes(2);
    expect(onOpenKeysChange).toHaveBeenCalledWith([]);
  });
});

const getMenus = () => [
  {
    key: 'intro',
    label: 'Introduction',
  },
  {
    key: 'refGuides',
    label: 'Reference Guides',
    isToggleOutside: true,
    subMenus: [
      {
        key: 'preparingEnv',
        label: 'Preparing Your Environment',
        subMenus: [
          {
            key: 'browserSupport',
            label: 'Browser Support',
          },
          {
            key: 'gatsbyWindow',
            label: 'Gatsby on Windows',
          },
          {
            key: 'gatsbyLinux',
            label: 'Gatsby on Linux',
          },
        ],
      },
      {
        key: 'deployHosting',
        label: 'Deploying & Hosting',
        subMenus: [
          {
            key: 'preparing',
            label: 'Preparing a Site for Deployment',
          },
          {
            key: 'awsAmplify',
            label: 'Deploying to AWS Amplify',
          },
          {
            key: 'awsS3',
            label: 'Deploying to S3 and CloudFront',
          },
        ],
      },
      {
        key: 'customConfig',
        label: 'Custom Configuration',
        subMenus: [
          {
            key: 'babeljs',
            label: 'Customizing Babel.js Config',
          },
          {
            key: 'babelPluginMacro',
            label: 'Using Babel Plugin Macros',
          },
          {
            key: 'customWebpack',
            label: 'Adding a Custom Webpack Config',
          },
        ],
      },
    ],
  },
  {
    key: 'api',
    label: 'Gatsby API',
    subMenus: [
      {
        key: 'themes',
        label: 'Gatsby Themes',
      },
      {
        key: 'link',
        label: 'Gatsby Link',
      },
      {
        key: 'image',
        label: 'Gatsby Image',
      },
      {
        key: 'config',
        label: 'Gatsby Config',
      },
    ],
  },
  {
    key: 'migration',
    label: 'Releases & Migration',
    subMenus: [
      {
        key: 'v2',
        label: 'v2 Release Notes',
      },
      {
        key: 'v1',
        label: 'v1 Release Notes',
      },
      {
        key: 'v1Tov2',
        label: 'Migration from v1 to v2',
      },
      {
        key: 'v0Tov1',
        label: 'Migration from v0 to v1',
      },
    ],
  },
];
