import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ColumnToRow, RowToColumn, Row, Column, Item } from '@mui-treasury/components/flex';

export default () => {
  return (
    <Box p={'calc(24px / 2)'}>
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
      <ColumnToRow gap={{ xs: 1, sm: 1.5, md: 2 }} at={'sm'}>
        <Item>
          <Box width={'100%'} minWidth={300} maxWidth={500} height={100} bgcolor={'primary.main'} />
        </Item>
        <Row ml={{ sm: 'auto' }} gap={{ xs: 2, sm: 2.5, md: 3 }}>
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
      <br />
      <Row wrap gap={2}>
        <Item stretched>
          <Box minWidth={280} maxWidth={400} height={200} bgcolor={'grey.300'} />
        </Item>
        <Item position={'middle'} grow>
          <Button variant={'contained'} fullWidth>Learn more</Button>
        </Item>
      </Row>
      <br />
      <Row wrap gap={1}>
        <Item stretched>
          <Box width={150} height={150} bgcolor={'grey.300'} borderRadius={'50%'} />
        </Item>
        <Column position={'middle'} grow>
          <Item>
            <Button variant={'contained'} fullWidth>Add friend</Button>
          </Item>
          <Item>
            <Button variant={'contained'} fullWidth>Notify me</Button>
          </Item>
        </Column>
      </Row>
      <br />
      <Row wrap gap={2}>
        <Item>
          <Box width={100} height={100} bgcolor={'grey.300'} borderRadius={'50%'} />
        </Item>
        <Row wrap stretched position={'middle'}>
          <Item stretched>
            <Box maxWidth={400}>
              <Typography variant={'h5'}>
                <b>Title is here</b>
              </Typography>
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
              </Typography>
            </Box>
          </Item>
          <Row wrap position={'bottom'} gap={1}>
            <Item grow>
              <Button variant={'contained'} fullWidth>Add friend</Button>
            </Item>
            <Item grow>
              <Button variant={'contained'} fullWidth>Notify me</Button>
            </Item>
          </Row>
        </Row>
      </Row>
      <br />
      <Row wrap gap={2}>
        <Item>
          <Box width={100} height={100} bgcolor={'grey.300'} borderRadius={'50%'} />
        </Item>
        <ColumnToRow stretched at={900} position={'middle'}>
          <Item stretched>
            <Box maxWidth={400}>
              <Typography variant={'h5'}>
                <b>Title is here</b>
              </Typography>
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
              </Typography>
            </Box>
          </Item>
          <Row wrap position={'bottom'} gap={1} maxWidth={300}>
            <Item grow>
              <Button variant={'contained'} fullWidth>Add friend</Button>
            </Item>
            <Item grow>
              <Button variant={'contained'} fullWidth>Notify me</Button>
            </Item>
          </Row>
        </ColumnToRow>
      </Row>
    </Box>
  )
}
