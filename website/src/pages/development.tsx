import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ColumnToRow, RowToColumn, Row, Column, Item } from '@mui-treasury/components/flex';

export default () => {
  return (
    <Box p={3}>
      <ColumnToRow gap={2} at={'sm'}>
        <Item>
          <Box width={'100%'} minWidth={300} maxWidth={500} height={100} bgcolor={'primary.main'} />
        </Item>
        <Row ml={{ sm: 'auto' }}>
          <Item flex={1}>
            <Button fullWidth variant={'contained'}>Submit</Button>
          </Item>
          <Item flex={1}>
            <Button fullWidth>Cancel</Button>
          </Item>
        </Row>
      </ColumnToRow>
      <br />
      <ColumnToRow gap={2} at={'sm'} justifyContent={'space-between'}>
        <Item>
          <Box width={'100%'} minWidth={300} maxWidth={500} height={100} bgcolor={'primary.main'} />
        </Item>
        <RowToColumn gap={1} at={500} columnReversed>
          <Item flex={1}>
            <Button fullWidth>Cancel</Button>
          </Item>
          <Item flex={1}>
            <Button fullWidth variant={'contained'}>Submit</Button>
          </Item>
        </RowToColumn>
      </ColumnToRow>
      <br />
      <Row gap={2}>
        <Item>item1</Item>
        <Row gap={1} data-testid={'nested-row'}>
          <Item>nested-row item1</Item>
          <Item>nested-row item2</Item>
        </Row>
        <Column gap={3} data-testid={'nested-column'}>
          <Item>nested-column item1</Item>
          <Item>nested-column item2</Item>
          <Item>nested-column item3</Item>
        </Column>
      </Row>
      <br />
      <Grid container spacing={2} alignContent={'stretch'}>
        <Grid item>
          <Box width={500} height={100} bgcolor={'primary.main'} />
        </Grid>
        <Grid item alignContent={'stretch'}>
          <Box ml={'auto'} width={300} height={64} bgcolor={'secondary.main'} />
        </Grid>
      </Grid>
    </Box>
  )
}
