import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Sheet from 'components/atoms/Sheet';
import Copier from 'components/atoms/Copier';
import CodeHighlight from 'components/highlights/CodeHighlight';
import ExtensionHeader from 'internal/organisms/ExtensionHeader';

// EXTENSIONS
import Typography from 'extensions/Typography';

import Icon from 'extensions/Icon';
// DOC

import iconDoc from 'docs/extensions/icon';
import CONSTANT from 'constant';

const materialIconCode =
  // eslint-disable-next-line max-len
  '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />';

const ExtIconPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <ExtensionHeader
        index={index}
        setIndex={setIndex}
        title={'Extended Icon'}
        subtitle={"Support SVG, Web font and FontAwesome, that's all we need."}
        version={iconDoc.version}
      />
      <Box px={{ xs: 0, sm: 3 }} py={5}>
        {index === 0 && (
          <Container>
            <Typography gutterBottom>
              <b>The Problem ?</b>
            </Typography>
            <Typography gutterBottom>
              1. Material icons is not enough. We need{' '}
              <Typography
                link
                target={'_blank'}
                rel="noopener"
                href={'https://fontawesome.com/icons'}
              >
                Font Awesome 5
              </Typography>
            </Typography>
            <Typography gutterBottom>
              2. Font Awesome is not 100% ready to use with Material-UI. (there
              {/* eslint-disable-next-line max-len */}
              is difference in sizes) <b>Material</b> is 24x24px by default, but{' '}
              <b>Font Awesome</b> depends on its shape
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  height={60}
                >
                  <Icon>favorite</Icon>
                </Box>
                <Typography align={'center'} gutterBottom>
                  <Typography
                    link
                    target={'_blank'}
                    rel="noopener"
                    href={'https://material.io/tools/icons'}
                  >
                    Material Icon
                  </Typography>
                </Typography>
                <Box py={1} px={2} textAlign={'center'}>
                  <CodeHighlight padded={2} code={'<Icon>favorite</Icon>'} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  height={60}
                >
                  <i className={'fab fa-facebook-f'} />
                </Box>
                <Typography align={'center'} gutterBottom>
                  <Typography
                    link
                    target={'_blank'}
                    rel="noopener"
                    href={'https://fontawesome.com/icons'}
                  >
                    Font Awesome
                  </Typography>
                </Typography>
                <Box py={1} px={2} textAlign={'center'}>
                  <CodeHighlight
                    padded={2}
                    code={"<i className={'fas fa-heart'} />"}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box pb={2} />
            <Typography gutterBottom>
              3. Many people will use font awesome + material icon in
              material-ui, and will be frustrated when they have to keep
              consistent size while they switch between them.
            </Typography>
            <Typography gutterBottom>
              4. It is not very useful right now, ex. in contrast background I
              want to make the icon turn white or I want it to be bigger or add
              a little margin on the left side of it by <b>using props</b>
            </Typography>
            <Typography gutterBottom>
              5. Icon + Typography really annoyed me.
            </Typography>
            <Box my={2}>
              <Divider />
            </Box>
            <Typography variant={'h5'} gutterBottom>
              Here is the Solution!
            </Typography>
            <Typography gutterBottom>
              I adjusted sizes for both Material and FontAwesome, so when you
              use it you feel like it is from the same lib. Also, I added
              necessary props that I found them useful and appear in many modern
              website (link, inverted, color, bgColor and shape).
            </Typography>
            <Typography bottomSpace={'big'}>
              <Typography
                link
                target={'_blank'}
                rel="noopener"
                href={'https://codesandbox.io/s/6yxy45yn9n'}
              >
                Code Sandbox
              </Typography>
            </Typography>
            {iconDoc.components.map(
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
            <Typography variant={'h6'}>How to use</Typography>
            <Typography>
              <ol>
                <li>
                  <code>
                    yarn add @material-ui/core @material-ui/styles clsx
                  </code>{' '}
                  <Copier.Text
                    text={
                      // eslint-disable-next-line max-len
                      'yarn add @material-ui/core @material-ui/styles clsx color'
                    }
                  />
                </li>
                <li>
                  If you want to use material icon SVG
                  <br />
                  <code>yarn add @material-ui/icons</code>{' '}
                  <Copier.Text text={'yarn add @material-ui/icons'} />
                  <br />
                  <br />
                  of if you want to web material webfont
                  <br />
                  <code>{materialIconCode}</code>{' '}
                  <Copier.Text text={materialIconCode} />
                </li>
                <li>
                  Good news, it integrates seamlessly with{' '}
                  <Typography
                    link
                    href={'https://fontawesome.com/start'}
                    target={'_blank'}
                    rel="noopener"
                  >
                    Font Awesome 5
                  </Typography>
                </li>
                <li>
                  <Typography
                    link
                    href={CONSTANT.files.icon}
                    rel={'noopener'}
                    target={'_blank'}
                  >
                    Download Icon File
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
              </ol>
            </Typography>
            <CodeHighlight code={iconDoc.code} />
          </Container>
        )}
      </Box>
    </div>
  );
};

ExtIconPage.components = iconDoc.components;

export default ExtIconPage;
