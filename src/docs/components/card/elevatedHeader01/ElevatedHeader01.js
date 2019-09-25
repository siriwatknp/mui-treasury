import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CardHeader from '@material-ui/core/CardHeader';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { useElevatedCardHeaderStyles } from '@mui-treasury/styles/card';

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

const ElevatedCardHeader01 = () => {
  const styles = useElevatedCardHeaderStyles();
  return (
    <Card classes={styles} className={'MuiElevatedCard--01'}>
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
};

// hide-start
ElevatedCardHeader01.metadata = {
  title: 'Elevated Header I',
  path: 'card/elevatedHeader01',
  files: [{ pkg: 'mui-styles', path: 'card/elevatedCardHeader01.styles.js' }],
};
// hide-end

export default ElevatedCardHeader01;
