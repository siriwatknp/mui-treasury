import React from 'react';
import {
  LayoutProvider,
  LayoutConsumer,
} from '@mui-treasury/layout/layoutContext';
import Sidebar from '@mui-treasury/layout/components/Sidebar';
import CollapseBtn from '@mui-treasury/layout/components/CollapseBtn';
import { useSidebarStyles } from '@mui-treasury/layout/styles';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';

const index = () => {
  const sidebarStyles = useSidebarStyles();
  return (
    <LayoutProvider
      config={{
        sidebar: {
          variant: 'permanent',
          width: 256,
          collapsible: true,
          collapsedWidth: 80,
        },
      }}
    >
      <Sidebar>
        {({ collapsed }) => (
          <>
            <div className={sidebarStyles.container}>nav goes here!</div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              {collapsed ? (
                <KeyboardArrowRightRounded />
              ) : (
                <KeyboardArrowLeftRounded />
              )}
            </CollapseBtn>
          </>
        )}
      </Sidebar>
      <LayoutConsumer>
        {({ setOpened }) => (
          // eslint-disable-next-line react/button-has-type
          <button onClick={() => setOpened(true)}>open</button>
        )}
      </LayoutConsumer>
    </LayoutProvider>
  );
};

index.propTypes = {};
index.defaultProps = {};

export default index;
