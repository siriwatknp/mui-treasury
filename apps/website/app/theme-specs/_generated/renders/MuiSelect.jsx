import * as React from 'react';
import C from '@mui/material/Select';
import SvgIcon from '@mui/material/SvgIcon';
import MenuItem from '@mui/material/MenuItem';
const node = <SvgIcon><path d="M12 2 2 22h20L12 2z" /></SvgIcon>;
const value = (v) => (v === '@node' ? node : v === '@fn' ? () => {} : v);
export const Render = (props) => <C {...{ value: 'Probe one' }} {...Object.fromEntries(Object.entries(props).map(([k, v]) => [k, value(v)]))}>{[<MenuItem key="1" value="Probe one">Probe one</MenuItem>, <MenuItem key="2" value="Probe two">Probe two</MenuItem>]}</C>;
