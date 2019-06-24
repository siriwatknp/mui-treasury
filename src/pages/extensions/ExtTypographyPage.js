import React, { useState } from 'react';
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

import typographyDoc from 'docs/extensions/typography';
import CONSTANT from 'constant';

const ExtTypographyPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <ExtensionHeader
        index={index}
        setIndex={setIndex}
        title={'Extended Typography'}
        subtitle={
          // eslint-disable-next-line max-len
          'Useful props are added to make it easier to use.'
        }
        version={typographyDoc.version}
      />
      <Box px={{ xs: 0, sm: 3 }} py={5}>
        {index === 0 && (
          <Container>
            {typographyDoc.components.map(
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
                        {render()}
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
            <Typography variant={'h6'}>How to use</Typography>
            <Typography component={'div'}>
              <ol>
                <li>
                  <code>yarn add @material-ui/core clsx</code>{' '}
                  <Copier.Text text={'yarn add @material-ui/core clsx'} />
                </li>
                <li>
                  <Typography
                    link
                    href={CONSTANT.files.typography}
                    rel={'noopener'}
                    target={'_blank'}
                  >
                    Download Typography File
                  </Typography>{' '}
                  and put it in your project.{' '}
                  <Typography component={'span'} color={'hint'}>
                    ({"don't"} worry, no spam, just a React component)
                  </Typography>
                </li>
                <li>
                  Look at component propTypes, adjust default props to suit your
                  project.
                  <Typography bottomSpace={'medium'} />
                </li>
              </ol>
            </Typography>
            <CodeHighlight code={typographyDoc.code} copyable />
          </Container>
        )}
      </Box>
    </div>
  );
};

ExtTypographyPage.components = typographyDoc.components;

export default ExtTypographyPage;
