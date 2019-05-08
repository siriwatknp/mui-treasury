import Box from '@material-ui/core/Box';
import styled from '@material-ui/styles/styled';
import cssSystem from 'helpers/cssSystem';

const CustomBox = styled(Box)(cssSystem);

const justifyBetween = {
  display: 'flex',
  justifyContent: 'space-between',
};
const justifyCenter = {
  display: 'flex',
  justifyContent: 'center',
};
const justifyCenterColumn = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};
const alignCenter = {
  display: 'flex',
  alignItems: 'center',
};
const alignCenterColumn = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};
const allCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const allCenterColumn = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

CustomBox.justifyBetween = justifyBetween;
CustomBox.justifyCenter = justifyCenter;
CustomBox.justifyCenterColumn = justifyCenterColumn;
CustomBox.alignCenter = alignCenter;
CustomBox.alignCenterColumn = alignCenterColumn;
CustomBox.allCenter = allCenter;
CustomBox.allCenterColumn = allCenterColumn;
CustomBox.alignCenter = alignCenter;
CustomBox.displayName = 'Box';

export default CustomBox;
