import * as React from 'react';
import C from '@mui/material/PaginationItem';
import P from '@mui/material/Pagination';
import SvgIcon from '@mui/material/SvgIcon';
const node = <SvgIcon><path d="M12 2 2 22h20L12 2z" /></SvgIcon>;
const value = (v) => (v === '@node' ? node : v === '@fn' ? () => {} : v);
export const Render = (props) => <P><C {...Object.fromEntries(Object.entries(props).map(([k, v]) => [k, value(v)]))}>{'Probe'}</C></P>;
