import * as React from 'react';
import C from '@mui/material/TableFooter';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
const node = <SvgIcon><path d="M12 2 2 22h20L12 2z" /></SvgIcon>;
const value = (v) => (v === '@node' ? node : v === '@fn' ? () => {} : v);
export const Render = (props) => <Table><C {...Object.fromEntries(Object.entries(props).map(([k, v]) => [k, value(v)]))}>{<TableRow><td>Probe</td></TableRow>}</C></Table>;
