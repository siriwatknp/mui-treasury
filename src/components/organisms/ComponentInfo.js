import React, { useState } from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from 'components/predefined/Typography';
import Tag from 'components/atoms/Tag';
import ChromeTabs from 'components/tabs/ChromeTabs';
import CodeHighlight from 'components/highlights/CodeHighlight';
import Copier from 'components/atoms/Copier';

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
  const renderList = (items, text, defaultIcon) => {
    if (!items || !items.length) return null;
    return (
      <>
        <Typography weight={'bold'} bottomSpace={'small'}>
          {text}
        </Typography>
        <Grid container spacing={2}>
          {items.map(({ icon, label, url, ...rest }) => (
            <Grid item key={label}>
              <Tag
                icon={icon || defaultIcon}
                component={'a'}
                rel={'noopener'}
                target={'_blank'}
                href={url}
                {...rest}
              >
                {label}
              </Tag>
            </Grid>
          ))}
        </Grid>
        <Box mb={3} />
      </>
    );
  };
  return (
    <Box p={2} className={cx('ComponentInfo-root', className)}>
      <Typography
        variant={'h2'}
        size={'large'}
        weight={900}
        align={'center'}
        spacing={'small'}
      >
        {name}
      </Typography>
      {renderList(links, 'Useful Links', 'fal fa-external-link-square')}
      {renderList(
        libraries,
        'External Libraries',
        'fal fa-external-link-square',
      )}
      {renderList(childComponents, 'Child Components', 'keyboard_arrow_right')}
      <Typography weight={'bold'}>How to use</Typography>
      <Typography component={'div'} variant={'body2'} bottomSpace={'big'}>
        <ol>
          <li>
            <Typography code>yarn add {dependencies.join(' ')} </Typography>
            <Copier.Text text={`yarn add ${dependencies.join(' ')}`} />
          </li>
          <li>copy all files below to your project</li>
        </ol>
      </Typography>
      <Box mx={-2} mb={-2}>
        <ChromeTabs
          value={index}
          onChange={(e, i) => setIndex(i)}
          tabs={files}
        />
        <Box bgcolor={'#272C34'} p={2} minHeight={500}>
          <CodeHighlight
            code={files[index] ? files[index].code || '// none' : ''}
          />
        </Box>
      </Box>
    </Box>
  );
};

ComponentInfo.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({})),
  libraries: PropTypes.arrayOf(PropTypes.shape({})),
  childComponents: PropTypes.arrayOf(PropTypes.shape({})),
  dependencies: PropTypes.arrayOf(PropTypes.string),
  files: PropTypes.arrayOf(PropTypes.shape({})),
};
ComponentInfo.defaultProps = {
  className: '',
  name: '',
  links: [],
  libraries: [],
  childComponents: [],
  dependencies: [],
  files: [],
};

export default ComponentInfo;
