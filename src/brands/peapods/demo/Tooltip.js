import React from 'react';
import Link from '@material-ui/core/Link';
import PeaTooltip from '../lib/PeaTooltip';

const Tooltip = () => (
  <div>
    <PeaTooltip title={'Tooltip description'}>
      <Link href={'/'} underline="none" variant="body1">
        Tooltip
      </Link>
    </PeaTooltip>
  </div>
);
Tooltip.metadata = {
  name: 'Pea Tooltip',
};
Tooltip.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Tooltip.code = `
  import React from 'react';
  import Link from '@material-ui/core/Link';
  import PeaTooltip from '../lib/PeaTooltip';

  const Tooltip = () => (
    <div>
      <PeaTooltip title={'Tooltip description'}>
        <Link href={'/'} underline="none" variant="body1">
          Tooltip
        </Link>
      </PeaTooltip>
    </div>
  );
`;

export default Tooltip;
