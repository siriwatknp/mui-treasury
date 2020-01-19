import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import FileCopy from '@material-ui/icons/FileCopy';
import createContainer, { StylesProvider } from './helpers/containerDecorator';

import Copier from 'components/atoms/Copier';

const useIconStyles = makeStyles(() => ({
  root: {
    marginRight: 4,
    fontSize: '1.1em',
  },
}));

storiesOf('Treasury|atoms', module)
  .addDecorator(createContainer({ maxWidth: 'sm' }))
  .add('Copier', () => (
    <StylesProvider useStyles={useIconStyles}>
      {styles => (
        <Copier>
          {({ copied }) => (
            <Button variant={'contained'} color={'secondary'} size={'small'}>
              <FileCopy classes={styles} />{' '}
              {copied ? 'Copied' : 'Click to copy'}
            </Button>
          )}
        </Copier>
      )}
    </StylesProvider>
  ));
