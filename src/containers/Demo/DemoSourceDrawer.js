import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SourceFile from 'containers/SourceFile';
import docGen from 'utils/docGen';
import { isExternalLink } from 'utils/functions';

import atoms from 'components/atoms';
import organisms from 'components/organisms';

import { Consumer } from './context';

const { Tag } = atoms;
const { ModuleProjector } = organisms;

const useStyles = makeStyles(() => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const DemoSourceDrawer = () => {
  const classes = useStyles();
  const renderList = items => {
    if (!items || !items.length) return null;
    return (
      <>
        <Grid container spacing={2}>
          {items.map(({ label, url, ...rest }) => {
            const isExternal = isExternalLink(url);
            return (
              <Grid item key={label}>
                <Tag
                  icon={<KeyboardArrowRight />}
                  component={isExternal ? 'a' : Link}
                  {...(isExternal
                    ? {
                        rel: 'noopener',
                        target: '_blank',
                        href: url,
                      }
                    : {
                        to: url,
                      })}
                  {...rest}
                >
                  {label}
                </Tag>
              </Grid>
            );
          })}
        </Grid>
        <Box mb={3} />
      </>
    );
  };
  return (
    <Consumer>
      {({ metadata, setMetadata }) => {
        const isOpen = Object.keys(metadata).length > 0;
        const { files = [], relates = [] } = metadata;
        const mappedFiles = docGen().mapAllFiles(files);
        return (
          <Drawer
            classes={classes}
            open={isOpen}
            anchor={'right'}
            variant={'temporary'}
            onClose={() => setMetadata({})}
          >
            <Box mt={3} px={3}>
              <h2>{metadata.title}</h2>
            </Box>
            <Box px={3}>{renderList(relates, 'Relates')}</Box>
            <Box minWidth={{ xs: 256, sm: 500, md: 700 }}>
              <ModuleProjector
                files={mappedFiles}
                demoSource={
                  <SourceFile match={metadata.path} fileName={'Demo.js'} />
                }
              />
            </Box>
            <Box css={{ flexGrow: 1 }} bgcolor={'rgb(40, 44, 52)'} />
          </Drawer>
        );
      }}
    </Consumer>
  );
};

export default DemoSourceDrawer;
