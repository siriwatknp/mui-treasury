import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Portal from '@material-ui/core/Portal';
import Icon from '@material-ui/core/Icon';
import { Box } from 'components/atoms';

import { JsonHighlight, JsxHighlight } from '../../highlights';

const MobileThemeController = ({
  type,
  globalTheme,
  component,
  opened,
  onOpen,
  onClose,
}) => {
  const createOnClick = t => {
    if (type === t && opened) {
      return onClose;
    }
    return onOpen(t);
  };
  return (
    <Portal>
      <Box position={'fixed'} zIndex={1400} bottom={0} left={0} right={0}>
        <Box
          zIndex={3}
          width={'100%'}
          minHeight={60}
          borderRadius={'50%'}
          position={'absolute'}
          top={0}
          boxShadow={20}
        />
        <Box
          position={'relative'}
          zIndex={4}
          display={'flex'}
          minHeight={60}
          bgcolor={'common.white'}
        >
          <Button style={{ flex: 1 }} onClick={createOnClick('global')}>
            Global <Icon>arrow_drop_up_rounded</Icon>
          </Button>
          <Box width={'1px'} bgcolor={'grey.200'} />
          <Button style={{ flex: 1 }} onClick={createOnClick('component')}>
            Component <Icon>arrow_drop_up_rounded</Icon>
          </Button>
        </Box>
        {!!opened && (
          <Box
            position={'fixed'}
            top={0}
            zIndex={1}
            width={'100%'}
            height={'100%'}
            bgcolor={'rgba(0,0,0,0.7)'}
            onClick={onClose}
          />
        )}
        <Box
          position={'absolute'}
          top={0}
          zIndex={2}
          width={'100%'}
          bgcolor={'rgb(250, 248, 245)'}
          css={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          transition={'0.4s'}
          transform={`translateY(${opened ? '-100%' : '0'})`}
        >
          {!!opened && (
            <React.Fragment>
              <Box
                width={32}
                borderRadius={20}
                height={6}
                bgcolor={'grey.400'}
                position={'absolute'}
                top={24}
                left={'50%'}
                transform={'translateX(-32px) rotateZ(15deg)'}
                transformOrigin={'100% 100%'}
                onClick={onClose}
              />
              <Box
                width={32}
                borderRadius={20}
                height={6}
                bgcolor={'grey.400'}
                position={'absolute'}
                top={24}
                left={'50%'}
                transform={'translateX(-3px) rotateZ(-15deg)'}
                transformOrigin={'0 100%'}
                onClick={onClose}
              />
            </React.Fragment>
          )}
          <Box
            transition={'0.3s'}
            maxHeight={'60vh'}
            pt={4}
            pb={2}
            px={opened ? 2 : 0}
          >
            {type === 'global' && <JsonHighlight value={globalTheme} />}
            {type === 'component' && (
              <JsonHighlight
                value={
                  component
                    ? component.getTheme(createMuiTheme())
                    : 'Select some component'
                }
              />
            )}
            {type === 'jsx' && (
              <JsxHighlight component={component || 'Select some component'} />
            )}
          </Box>
        </Box>
      </Box>
    </Portal>
  );
};

MobileThemeController.propTypes = {
  type: PropTypes.string.isRequired,
  globalTheme: PropTypes.shape({}),
  component: PropTypes.func,
  opened: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
MobileThemeController.defaultProps = {
  globalTheme: null,
  component: null,
};

export default MobileThemeController;
