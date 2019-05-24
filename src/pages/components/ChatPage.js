/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import ChatMessages from 'components/chats/ChatMessages';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const AVATAR =
  'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
const components = [
  {
    name: 'Chat Messages (left)',
    component: ChatMessages,
    render: () => (
      <ChatMessages
        avatar={AVATAR}
        messages={[
          'Hi Jenny, How r u today?',
          'Did you train yesterday',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
        ]}
      />
    ),
    previewProps: {
      white: true,
    },
  },
  {
    name: 'Chat Messages (right)',
    component: ChatMessages,
    render: () => (
      <ChatMessages
        side={'right'}
        messages={[
          "Great! What's about you?",
          'Of course I did. Speaking of which check this out',
        ]}
      />
    ),
  },
  {
    name: 'Chat Messages (full)',
    component: ChatMessages,
    render: () => (
      <div>
        <ChatMessages
          avatar={AVATAR}
          messages={[
            'Hi Jenny, How r u today?',
            'Did you train yesterday',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
          ]}
        />
        <ChatMessages
          side={'right'}
          messages={[
            "Great! What's about you?",
            'Of course I did. Speaking of which check this out',
          ]}
        />
        <ChatMessages avatar={AVATAR} messages={['Im good.', 'See u later.']} />
      </div>
    ),
    previewProps: {
      white: true,
    },
  },
];

const ChatPage = ({ counter, globalTheme, onSelectComponent }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Grid container spacing={4}>
      {components.map(
        ({ name, component, render, gridItemProps, previewProps }) => (
          <Grid
            key={name || get(component, 'metadata.name')}
            item
            xs={12}
            sm={12}
            lg={6}
            {...gridItemProps}
          >
            <PreviewWidget
              sandboxLink={component.codeSandbox}
              onClick={() => onSelectComponent(component)}
              {...get(component, 'metadata')}
              {...previewProps}
              name={name || get(component, 'metadata.name')}
            >
              <ShouldUpdate value={counter}>
                <ThemeProvider
                  theme={createTheme({
                    ...globalTheme,
                    ...(component.getTheme && {
                      overrides: component.getTheme(
                        merge(baseTheme, globalTheme),
                      ),
                    }),
                  })}
                >
                  {render()}
                </ThemeProvider>
              </ShouldUpdate>
            </PreviewWidget>
          </Grid>
        ),
      )}
    </Grid>
  </Box>
);

ChatPage.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
ChatPage.components = components;

export default ChatPage;
