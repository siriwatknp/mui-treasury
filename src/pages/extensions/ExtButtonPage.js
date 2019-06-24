import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sheet from 'components/atoms/Sheet';
import Copier from 'components/atoms/Copier';
import CodeHighlight from 'components/highlights/CodeHighlight';
import ExtensionHeader from 'internal/organisms/ExtensionHeader';

// EXTENSIONS
import Typography from 'extensions/Typography';

import Icon from 'extensions/Icon';
// DOC

import buttonDoc from 'docs/extensions/button';
import CONSTANT from 'constant';

const ExtButtonPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <ExtensionHeader
        index={index}
        setIndex={setIndex}
        title={buttonDoc.info.name}
        subtitle={buttonDoc.info.description}
        version={buttonDoc.version}
      />
      <Box px={{ xs: 0, sm: 3 }} py={5}>
        {index === 0 && (
          <Container>
            {buttonDoc.components.map(
              ({
                name,
                description,
                code,
                render,
                bgColor = 'light',
                inverted,
              }) => (
                <Box pb={5} key={name}>
                  <Typography
                    variant={'h5'}
                    id={name}
                    hrefAnchor={`#${name}`}
                    anchor={<Icon size={'small'}>far fa-link</Icon>}
                    weight={'bold'}
                  >
                    {name}
                  </Typography>
                  <Typography color={'textSecondary'} bottomSpace={'small'}>
                    {description}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                      <Sheet
                        style={{ height: '100%' }}
                        bgColor={inverted ? 'dark' : bgColor}
                      >
                        <Box
                          height={'100%'}
                          display={'flex'}
                          justifyContent={'space-evenly'}
                          alignItems={'center'}
                          flexWrap={'wrap'}
                        >
                          {render()}
                        </Box>
                      </Sheet>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <CodeHighlight height={'100%'} code={code} copyable />
                    </Grid>
                  </Grid>
                </Box>
              ),
            )}
          </Container>
        )}
        {index === 1 && (
          <Container>
            <Typography
              link
              variant={'h6'}
              id={'how-to-use-button'}
              href={'#how-to-use-button'}
              underline={'hover'}
              weight={'bold'}
              color={'textPrimary'}
              gutterBottom
            >
              How to use
            </Typography>
            <Typography>
              <ol>
                <li>
                  <code>
                    yarn add @material-ui/core @material-ui/styles clsx color
                  </code>{' '}
                  <Copier.Text
                    text={
                      // eslint-disable-next-line max-len
                      'yarn add @material-ui/core @material-ui/styles clsx color'
                    }
                  />
                </li>
                <li>
                  <Typography
                    link
                    href={CONSTANT.files.button}
                    rel={'noopener'}
                    target={'_blank'}
                  >
                    Download Button File
                  </Typography>{' '}
                  and put it in your project.{' '}
                  <Typography component={'span'} inline color={'hint'}>
                    ({"don't"} worry, no spam, just a React component)
                  </Typography>
                </li>
                <li>
                  Look at component propTypes, adjust default props to suit your
                  project.
                  <Typography gutterBottom />
                </li>
                <li>
                  You might want to look at{' '}
                  <Typography link component={Link} to={'/extensions/icon'}>
                    Extended Icon
                  </Typography>{' '}
                  to use with this Button
                </li>
              </ol>
            </Typography>
            <CodeHighlight code={buttonDoc.code} copyable />
          </Container>
        )}
      </Box>
    </div>
  );
};

ExtButtonPage.components = buttonDoc.components;

export default ExtButtonPage;
