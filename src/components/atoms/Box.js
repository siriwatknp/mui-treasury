import { unstable_Box as Box } from '@material-ui/core/Box';
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
const alignCenter = {
  display: 'flex',
  alignItems: 'center',
};
const allCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

CustomBox.justifyBetween = justifyBetween;
CustomBox.justifyCenter = justifyCenter;
CustomBox.alignCenter = alignCenter;
CustomBox.allCenter = allCenter;
CustomBox.alignCenter = alignCenter;
CustomBox.displayName = 'Box';

export default CustomBox;
