import React from 'react';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';
import Typography from 'components/predefined/Typography';
import Icon from 'components/predefined/Icon';
import code from './typographyCode';

const sizes = ['small', '', 'big', 'large'];
const colors = [
  'primary',
  'secondary',
  'textPrimary',
  'textSecondary',
  'error',
  'hint',
];
const bottomSpace = ['small', 'medium', 'big', 'none'];
const topSpace = ['none', 'small', 'medium', 'big'];
export const basicExamples = [
  {
    render: () => (
      <>
        {sizes.map(size => (
          <Typography key={size} gutterBottom size={size}>
            size: {'"'}
            {size || 'default'}
            {'"'}
          </Typography>
        ))}
      </>
    ),
    code: code.sizes || '',
  },
  {
    render: () => (
      <>
        {colors.map(color => (
          <Typography key={color} gutterBottom color={color}>
            color: {'"'}
            {color}
            {'"'}
          </Typography>
        ))}
      </>
    ),
    code: code.colors || '',
  },
  {
    render: () => (
      <>
        {bottomSpace.map(space => (
          <Typography key={space} bottomSpace={space}>
            bottom space: {'"'}
            {space}
            {'"'}
          </Typography>
        ))}
      </>
    ),
    code: code.bottomSpace || '',
  },
  {
    render: () => (
      <Box borderRadius={4}>
        {topSpace.map(space => (
          <Typography key={space} topSpace={space}>
            top space: {'"'}
            {space}
            {'"'}
          </Typography>
        ))}
      </Box>
    ),
    code: code.topSpace || '',
  },
  {
    render: () => (
      <>
        <Typography
          code
          display={'inline-block'}
          bottomSpace={'medium'}
          size={'big'}
        >
          Lorem ipsum
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, <code>consectetur</code> adipiscing elit,
          sed do.
        </Typography>
      </>
    ),
    code: code.code || '',
  },
  {
    render: () => (
      <Box bgcolor={'grey.800'} mx={-2} p={2} borderRadius={4}>
        <Typography inverted size={'big'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          adipiscing at in tellus integer feugiat.
        </Typography>
      </Box>
    ),
    code: code.inverted || '',
  },
];

export const advancedExamples = [
  {
    render: () => (
      <>
        <Typography variant={'h6'} weight={'bold'} bottomSpace={'small'}>
          <Icon push={'right'}>description</Icon>
          Heading 6
        </Typography>
        <Typography indent={'small'}>
          <b>Lorem Ipsum</b> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry standard dummy
          text ever since the 1500s
        </Typography>
      </>
    ),
    code: code.paragraph || '',
    gridItemProps: {
      md: 6,
    },
  },
  {
    render: () => (
      <Typography variant={'h6'} weight={300}>
        <Typography
          link
          color={'secondary'}
          variant={'h6'} // needed
          component={'button'}
          onClick={() => alert('Clicked')}
        >
          <Icon>far fa-rocket</Icon>
          Lorem Ipsum
        </Typography>{' '}
        is simply dummy text of the printing and typesetting industry.{' '}
      </Typography>
    ),
    code: code.button || '',
    gridItemProps: {
      md: 6,
    },
  },
  {
    render: () => (
      <Typography blockquote component={'div'}>
        <Typography weight={'bold'} variant={'subtitle1'}>
          Note
        </Typography>
        React previously shipped with an experimental context API. The old API
        will be supported in all 16.x releases, but applications using it should
        migrate to the new version. The legacy API will be removed in a future
        major React version.{' '}
        <Typography
          link
          href={'https://reactjs.org/docs/context.html#when-to-use-context'}
          target={'_blank'}
          rel={'noopener'}
        >
          Read the legacy context docs here.
        </Typography>
      </Typography>
    ),
    code: code.note || '',
    gridItemProps: {
      md: 6,
    },
  },
  {
    render: () => (
      <>
        <Typography variant={'h4'} weight={300} bottomSpace={'small'}>
          Welcome to Firebase!
        </Typography>
        <Typography color={'textSecondary'} bottomSpace={'small'}>
          Tools from Google for developing great apps, engaging with your users,
          and earning more through mobile ads.
        </Typography>
        <Typography component={'div'}>
          <Typography
            link
            display={'inline-block'}
            push={'right'}
            bottomSpace={'small'}
          >
            <Icon size={'small'}>wb_sunny</Icon> Learn more
          </Typography>
          <Typography
            link
            display={'inline-block'}
            push={'right'}
            bottomSpace={'small'}
          >
            <Icon size={'small'}>far fa-book</Icon> Documentation
          </Typography>
          <Typography link display={'inline-block'} bottomSpace={'small'}>
            <Icon size={'small'}>insert_comment</Icon> Support
          </Typography>
        </Typography>
      </>
    ),
    code: code.firebase || '',
    gridItemProps: {
      md: 6,
    },
  },
  {
    render: () => (
      <Box bgcolor={'grey.50'} mx={-2} p={2} borderRadius={8}>
        <Typography
          link
          size={'big'}
          component={RouterLink}
          underline={'none'}
          to={'/demo-pages/amigo-e-commerce'}
        >
          React Router <Icon>chevron_right</Icon>
        </Typography>
      </Box>
    ),
    code: code.reactRouter || '',
    gridItemProps: {
      md: 6,
    },
  },
  {
    render: () => (
      <Box bgcolor={'grey.50'} mx={-2} p={2} borderRadius={8}>
        <Typography weight={'bold'} variant={'h4'} bottomSpace={'medium'}>
          Context
        </Typography>
        <Typography color={'hint'} size={'big'} bottomSpace={'medium'}>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.
        </Typography>
        <Typography variant={'subtitle1'}>
          In a typical React application, data is passed top-down (parent to
          child) via props, but this can be cumbersome for certain types of
          props (e.g. locale preference, UI theme) that are required by many
          components within an application. Context provides a way to share
          values like these between components without having to explicitly pass
          a prop through every level of the tree.
        </Typography>
        <Typography component={'div'}>
          <ul>
            <li>
              <Typography link>When to Use Context</Typography>
            </li>
            <li>
              <Typography link>Before You Use Context</Typography>
            </li>
            <li>
              <Typography link>API</Typography>
            </li>
            <ul>
              <li>
                <Typography link>React.createContext</Typography>
              </li>
              <li>
                <Typography link>Context.Provider</Typography>
              </li>
              <li>
                <Typography link>Class.contextType</Typography>
              </li>
              <li>
                <Typography link>Context.Consumer</Typography>
              </li>
            </ul>
          </ul>
        </Typography>
      </Box>
    ),
    code: code.blog || '',
    gridItemProps: {
      sm: 12,
      md: 12,
    },
  },
];
