/* eslint-disable max-len */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from 'extensions/Typography';
import Box from '@material-ui/core/Box';
import Icon from 'extensions/Icon';
import code from './typographyCode';

const VERSION = 'v1.3';

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
const components = [
  {
    name: 'Extended Sizes',
    description: '',
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
    name: 'Extended Colors',
    description: '',
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
    name: 'Bottom Spacing',
    description: '',
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
    name: 'Top Spacing',
    description: '',
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
    name: 'Code Style',
    description: '',
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
    name: 'Inverted Typography',
    description: '',
    render: () => (
      <Typography inverted size={'big'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing
        at in tellus integer feugiat.
      </Typography>
    ),
    inverted: true,
    code: code.inverted || '',
  },
  {
    name: 'Paragraph',
    description: '',
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
    name: 'Typography as Button',
    description: '',
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
    name: 'Note',
    description: '',
    bgColor: 'white',
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
  },
  {
    name: 'Firebase Section',
    description: '',
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
  },
  {
    name: 'Anchor',
    description: '',
    render: () => (
      <Box mx={-2} px={2} borderRadius={8}>
        <Typography
          variant={'h4'}
          id={'anchor-example'}
          anchor={<Icon>far fa-link</Icon>}
          hrefAnchor={`#anchor-example`}
          weight={'bold'}
          color={'textPrimary'}
        >
          Header 4
        </Typography>
      </Box>
    ),
    code: code.anchor || '',
  },
  {
    name: 'React-Router Link',
    description: '',
    render: () => (
      <Typography
        link
        size={'big'}
        component={RouterLink}
        underline={'none'}
        to={'/demo-pages/amigo-e-commerce'}
      >
        React Router <Icon>chevron_right</Icon>
      </Typography>
    ),
    code: code.reactRouter || '',
  },
  {
    name: 'Blog',
    description: '',
    render: () => (
      <>
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
      </>
    ),
    code: code.blog || '',
  },
];

const coreCode = `
  /**
   * Current VERSION ${VERSION}
   *
   * vX.Y meaning
   * X = major changes ex. add/remove/rename some props/className,
   *     could affect other components
   * Y = minor changes ex. fix bug or internal logic, won't effect other component
   */
   
  import React from 'react';
  import cx from 'clsx';
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/styles';
  import Link from '@material-ui/core/Link';
  import MuiTypography from '@material-ui/core/Typography';
  
  const injectColor = color => {
    if (
      color === 'default' ||
      color === 'inherit' ||
      color === 'primary' ||
      color === 'secondary' ||
      color === 'textPrimary' ||
      color === 'textSecondary' ||
      color === 'error'
    ) {
      return color;
    }
    return undefined;
  };
  
  const injectDisplay = display => {
    if (display === 'initial' || display === 'inline' || display === 'block') {
      return display;
    }
    return undefined;
  };
  
  const generateMediaQueries = (css, breakpoints, object) => {
    if (!breakpoints) return '';
    const keys = Object.keys(object);
    const result = {};
    keys.forEach(key => {
      if (key === 'xs') {
        result[css] = object[key];
      } else {
        result[breakpoints.up(key)] = { [css]: object[key] };
      }
    });
    return result;
  };
  
  const createStylesBySize = (css, cls, values, breakpoints) =>
    values.reduce(
      (result, val) => ({
        ...result,
        [\`\${cls}\${val[0]}\`]:
          typeof val[1] === 'object'
            ? generateMediaQueries(css, breakpoints, val[1])
            : {
                [css]: val[1],
              },
      }),
      {},
    );
    
  // call Typography.setSecondFamily("your font family") in App.js
  // before using
  let secondFamilyVar = '';
  
  const useStyles = makeStyles(({ palette, spacing, breakpoints }) => {
    const invertedColor = palette.common.white;
    const codeStyle = {
      // change code style here!
      // default style is similar to antd
      // https://ant.design/components/typography/#components-typography-demo-text
      margin: '0 .2em',
      padding: '.2em .4em .1em',
      fontSize: '75%',
      background: palette.grey[100],
      border: \`1px solid \${palette.grey[300]}\`,
      borderRadius: 3,
      fontFamily:
        // eslint-disable-next-line max-len
        "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,Courier,monospace",
    };
    const blockQuoteStyle = {
      // change code style here!
      // default style is similar to reactjs.org
      // https://reactjs.org/docs/
      backgroundColor: 'rgba(255,229,100,0.3)',
      borderLeftColor: '#ffe564',
      borderLeftWidth: 9,
      borderLeftStyle: 'solid',
      padding: spacing(2.5, 5, 2.5, 3),
      margin: spacing(2.5, -3, 3),
    };
    return {
      root: {
        '&.-code, & code': codeStyle,
        '&.-blockquote, & blockquote': blockQuoteStyle,
        '& ul, ol': {
          paddingLeft: spacing(3),
        },
        '& li': {
          marginBottom: '0.5em',
        },
        '& b': {
          fontWeight: 'bold',
        },
        '&.-inverted:not(.-code)': {
          color: invertedColor,
        },
        // family
        // call Typography.setSecondFamily("your font family") in App.js
        // before using
        '&.-second-family': {
          fontFamily: secondFamilyVar,
        },
        // colors
        ...createStylesBySize('color', '&.-color-', [
          ['hint', palette.grey[500]],
          ['danger', palette.error.main],
        ]),
        // displays
        ...createStylesBySize('display', '&.-display-', [
          ['inline-block', 'inline-block'],
          ['inline-flex', 'inline-flex'],
        ]),
        // sizes
        ...createStylesBySize('fontSize', '&.-size-', [
          ['small', 12],
          ['big', 20],
          ['large', 24],
        ]),
        // indents
        ...createStylesBySize('textIndent', '&.-indent-', [
          ['small', spacing(2)],
          ['medium', spacing(3)],
          ['big', spacing(4)],
        ]),
        // spacings
        ...createStylesBySize('letterSpacing', '&.-spacing-', [
          ['small', '0.5px'],
          ['medium', '1px'],
          ['big', '2px'],
        ]),
        // weights
        ...createStylesBySize('fontWeight', '&.-weight-', [
          ['100', 100],
          ['200', 200],
          ['300', 300],
          ['400', 400],
          ['500', 500],
          ['600', 600],
          ['700', 700],
          ['800', 800],
          ['900', 900],
          ['normal', 'normal'],
          ['bold', 'bold'],
        ]),
        // space bottom
        ...createStylesBySize(
          'marginTop',
          '&.-mt-',
          [
            ['none', '0px !important'],
            ['small', { xs: spacing(1), md: spacing(1.5) }],
            ['medium', { xs: spacing(2), md: spacing(3) }],
            ['big', { xs: spacing(4), md: spacing(5) }],
          ],
          breakpoints,
        ),
        // space top
        ...createStylesBySize(
          'marginBottom',
          '&.-mb-',
          [
            ['none', '0px !important'],
            ['small', { xs: spacing(1), md: spacing(1.5) }],
            ['medium', { xs: spacing(2), md: spacing(3) }],
            ['big', { xs: spacing(4), md: spacing(5) }],
          ],
          breakpoints,
        ),
        // push
        '&.-push-right': {
          marginRight: spacing(1.5),
          [breakpoints.up('md')]: {
            marginRight: spacing(2.5),
          },
        },
        '&.-push-left': {
          marginLeft: spacing(1.5),
          [breakpoints.up('md')]: {
            marginLeft: spacing(2.5),
          },
        },
        '&.-anchor': {
          '&:hover': {
            '& .-anchor-link': {
              visibility: 'visible',
            },
          },
          '& .-anchor-link': {
            margin: spacing(0, 1),
            visibility: 'hidden',
            color: palette.grey[600],
            '& > *': {
              verticalAlign: 'middle',
            },
            '&:hover': {
              color: palette.grey[900],
            },
          },
        },
      },
      button: {
        verticalAlign: 'unset',
      },
    };
  });
  
  const Typography = ({
    anchor,
    hrefAnchor,
    component,
    children,
    className,
    blockquote,
    display,
    bottomSpace,
    topSpace,
    push,
    indent,
    code,
    color,
    link,
    weight,
    size,
    inverted,
    secondFamily,
    spacing,
    ...props
  }) => {
    const classes = useStyles();
    const similarProps = {
      ...props,
      className: cx(
        'MuiTypography-root',
        className,
        anchor && \`-anchor\`,
        display && \`-display-\${display}\`,
        size && \`-size-\${size}\`,
        indent && \`-indent-\${indent}\`,
        inverted && '-inverted',
        code && '-code',
        blockquote && '-blockquote',
        color && \`-color-\${color}\`,
        weight && \`-weight-\${weight}\`,
        spacing && \`-spacing-\${spacing}\`,
        bottomSpace && \`-mb-\${bottomSpace}\`,
        topSpace && \`-mt-\${topSpace}\`,
        push && \`-push-\${push}\`,
        secondFamily && '-second-family',
      ),
      display: injectDisplay(display),
      color: injectColor(color),
      component: code ? 'span' : component,
      classes,
    };
    if (link) {
      return (
        <Link {...similarProps} color={injectColor(color || 'secondary')}>
          {children}
          {anchor && (
            <a href={hrefAnchor} className={'-anchor-link'} aria-label={'Anchor'}>
              {anchor}
            </a>
          )}
        </Link>
      );
    }
    return (
      <MuiTypography {...similarProps}>
        {children}
        {anchor && (
          <a href={hrefAnchor} className={'-anchor-link'} aria-label={'Anchor'}>
            {anchor}
          </a>
        )}
      </MuiTypography>
    );
  };
  
  Typography.propTypes = {
    anchor: PropTypes.node,
    hrefAnchor: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    blockquote: PropTypes.bool,
    display: PropTypes.oneOf([
      'initial',
      'block',
      'inline',
      'inline-block',
      'inline-flex',
    ]),
    inverted: PropTypes.bool,
    code: PropTypes.bool,
    indent: PropTypes.oneOf(['', 'small', 'medium', 'big']),
    size: PropTypes.oneOf(['small', '', 'big', 'large']),
    spacing: PropTypes.oneOf(['', 'small', 'medium', 'big']),
    bottomSpace: PropTypes.oneOf(['', 'none', 'small', 'medium', 'big']),
    topSpace: PropTypes.oneOf(['', 'none', 'small', 'medium', 'big']),
    push: PropTypes.oneOf(['', 'left', 'right']),
    color: PropTypes.oneOf([
      'error',
      'inherit',
      'primary',
      'secondary',
      'textPrimary',
      'textSecondary',
      // custom
      'danger',
      'hint',
    ]),
    weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    link: PropTypes.bool,
    component: PropTypes.elementType,
    secondFamily: PropTypes.bool,
  };
  Typography.defaultProps = {
    anchor: null,
    hrefAnchor: '',
    className: '',
    children: null,
    blockquote: false,
    display: undefined,
    color: undefined,
    bottomSpace: '',
    topSpace: '',
    push: '',
    inverted: false,
    code: false,
    indent: '',
    size: '',
    spacing: '',
    weight: undefined,
    link: false,
    component: undefined,
    secondFamily: false,
  };
  Typography.getTheme = () => {};
  Typography.setSecondFamily = family => {
    secondFamilyVar = family;
  };
  
  export default Typography;
`;

export default {
  components,
  code: coreCode,
  version: VERSION,
};
