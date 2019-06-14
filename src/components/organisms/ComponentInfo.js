import React, { useState } from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from 'components/predefined/Typography';
import Tag from 'components/atoms/Tag';
import ChromeTabs from 'components/tabs/ChromeTabs';
import CodeHighlight from 'components/highlights/CodeHighlight';

const ComponentInfo = ({
  className,
  name,
  links,
  libraries,
  childComponents,
  dependencies,
  files,
}) => {
  const [index, setIndex] = useState(0);
  const renderList = (items, defaultIcon) => (
    <Grid container spacing={2}>
      {items.map(({ icon, label, ...rest }) => (
        <Grid item>
          <Tag
            icon={icon || defaultIcon}
            component={'a'}
            rel={'noopener'}
            target={'_blank'}
            {...rest}
          >
            {label}
          </Tag>
        </Grid>
      ))}
    </Grid>
  );
  return (
    <Box p={2} className={cx('ComponentInfo-root', className)}>
      <Typography variant={'h2'} size={'large'} weight={900} align={'right'}>
        {name}
      </Typography>
      <Typography weight={'bold'} bottomSpace={'small'}>
        Useful Links
      </Typography>
      {renderList(links, 'fal fa-external-link-square')}
      <Box mb={3} />
      <Typography weight={'bold'} bottomSpace={'small'}>
        External Libraries
      </Typography>
      {renderList(libraries, 'fal fa-external-link-square')}
      <Box mb={3} />
      <Typography weight={'bold'} bottomSpace={'small'}>
        External Libraries
      </Typography>
      {renderList(childComponents, 'keyboard_arrow_right')}
      <Box mb={3} />
      <Typography weight={'bold'} bottomSpace={'small'}>
        How to use
      </Typography>
      <Typography component={'div'} variant={'body2'}>
        <ol>
          <li>yarn add {dependencies.join(' ')}</li>
          <li>copy all files below</li>
        </ol>
      </Typography>
      <Box mx={-2}>
        <ChromeTabs
          value={index}
          onChange={(e, i) => setIndex(i)}
          tabs={files}
        />
        <Box bgcolor={'#272C34'} p={2} minHeight={500}>
          <CodeHighlight code={files[index].code || '// none'} />
        </Box>
      </Box>
    </Box>
  );
};

ComponentInfo.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})),
  libraries: PropTypes.arrayOf(PropTypes.shape({})),
  childComponents: PropTypes.arrayOf(PropTypes.shape({})),
  dependencies: PropTypes.arrayOf(PropTypes.shape({})),
  files: PropTypes.arrayOf(PropTypes.shape({})),
};
ComponentInfo.defaultProps = {
  className: '',
  links: [],
  libraries: [],
  childComponents: [],
  dependencies: [],
  files: [],
};

export default ComponentInfo;
