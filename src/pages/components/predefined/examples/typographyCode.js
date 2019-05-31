const sizes = `
  import Typography from 'path/to/Typography';
  
  <Typography size="one of size" gutterBottom> 
    Lorem ipsum, Dora.
  </Typography>
`;

const colors = `
  import Typography from 'path/to/Typography';
  
  <Typography color="one of color" gutterBottom>
    Lorem ipsum, Dora.
  </Typography>
`;

const bottomSpace = `
  import Typography from 'path/to/Typography';
  
  <Typography bottomSpace="one of space">
    Lorem ipsum, Dora.
  </Typography>
`;

const topSpace = `
  import Typography from 'path/to/Typography';
  
  <Typography topSpace="one of space">
    Lorem ipsum, Dora.
  </Typography>
`;

const code = `
  import Typography from 'path/to/Typography';
  
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
`;

const inverted = `
  import Typography from 'path/to/Typography';
  
  <Typography inverted size={'big'}>
    Lorem ipsum
  </Typography>
`;

const paragraph = `
  import Typography from 'path/to/Typography';
  import Icon from 'path/to/Icon'; // look at icon page
  
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
`;

const button = `
  import Typography from 'path/to/Typography';
  import Icon from 'path/to/Icon'; // look at icon page
  
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
`;

const note = `
  import Typography from 'path/to/Typography';
  
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
`;

const firebase = `
  import Typography from 'path/to/Typography';
  import Icon from 'path/to/Icon'; // look at icon page
  
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
`;

const reactRouter = `
  import Typography from 'path/to/Typography';
  import Icon from 'path/to/Icon'; // look at icon page
  
  <Typography
    link
    size={'big'}
    component={RouterLink}
    to={'/demo-pages/amigo-e-commerce'}
  >
    React Router <Icon>chevron_right</Icon>
  </Typography>
`;

const blog = `
  import Typography from 'path/to/Typography';
  import Icon from 'path/to/Icon'; // look at icon page
  
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
`;

export default {
  sizes,
  colors,
  bottomSpace,
  topSpace,
  code,
  inverted,
  paragraph,
  button,
  note,
  firebase,
  reactRouter,
  blog,
};
