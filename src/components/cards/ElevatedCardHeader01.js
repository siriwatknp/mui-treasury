/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CardHeader from '@material-ui/core/CardHeader';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import purple from '@material-ui/core/colors/purple';

let id = 0;
function createData(name, fat, price) {
  id += 1;
  return { id, name, fat, price };
}

const rows = [
  createData('Frozen yoghurt', 159, 4.0),
  createData('Ice cream sandwich', 237, 4.3),
  createData('Eclair', 16.0, 6.0),
  createData('Cupcake', 3.7, 4.3),
  createData('Gingerbread', 16.0, 3.9),
];

const ElevatedCardHeader01 = () => (
  <Card className={'MuiElevatedCard--01'}>
    <CardHeader
      className={'MuiCardHeader-root'}
      title={'Desserts'}
      subheader={'Select your favourite'}
      classes={{
        title: 'MuiCardHeader-title',
        subheader: 'MuiCardHeader-subheader',
      }}
    />
    <CardContent className={'MuiCardContent-root'}>
      <div className={'MuiCardContent-inner'}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Price ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

ElevatedCardHeader01.getTheme = muiBaseTheme => {
  const offset = 40;
  const cardShadow = '0px 14px 80px rgba(34, 35, 58, 0.2)';
  const headerShadow = '4px 4px 20px 1px rgba(0, 0, 0, 0.2)';
  return {
    MuiCard: {
      root: {
        '&.MuiElevatedCard--01': {
          marginTop: offset,
          borderRadius: muiBaseTheme.spacing(0.5),
          transition: '0.3s',
          boxShadow: cardShadow,
          position: 'relative',
          width: '90%',
          overflow: 'initial',
          background: '#ffffff',
          padding: muiBaseTheme.spacing(2, 0),
          '& .MuiCardHeader-root': {
            flexShrink: 0,
            position: 'absolute',
            top: -offset,
            right: 20,
            left: 20,
            borderRadius: muiBaseTheme.spacing(2),
            backgroundColor: purple[500],
            overflow: 'hidden',
            boxShadow: headerShadow,
            textAlign: 'left',
            '& .MuiCardHeader-title': {
              color: '#ffffff',
              fontWeight: 900,
              letterSpacing: 1,
            },
            '& .MuiCardHeader-subheader': {
              color: '#ffffff',
              opacity: 0.87,
              fontWeight: 200,
              letterSpacing: 0.4,
            },
          },
          '& .MuiCardContent-root': {
            textAlign: 'left',
            '& .MuiCardContent-inner': {
              paddingTop: '38px',
              overflowX: 'auto',
            },
          },
        },
      },
    },
  };
};

ElevatedCardHeader01.metadata = {
  name: 'Elevated Card Header I',
  description: 'Wonderful elevated card header',
};

ElevatedCardHeader01.codeSandbox = 'https://codesandbox.io/s/5zjrl704wx';

export default ElevatedCardHeader01;
