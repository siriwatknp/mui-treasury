import React from 'react';
import each from 'jest-each';
import { screen, render } from '@testing-library/react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CallMade from '@material-ui/icons/CallMade';
import { positionInsideRow, positionInsideColumn } from './core';
import Column from './Column';
import Row from './Row';
import Item from './Item';
import Box from '@material-ui/core/Box';

describe('Flex', () => {
  describe('Row', () => {
    each([
      ['left', undefined],
      ['right', { marginLeft: 'auto' }],
      ['top', { alignSelf: 'flex-start' }],
      ['bottom', { alignSelf: 'flex-end' }],
      ['middle', { alignSelf: 'center' }],
      ['middle-right', { alignSelf: 'center', marginLeft: 'auto' }],
      [
        'center',
        { alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto' },
      ],
    ]).it('position: %s should return correct style', (pos, expectedValue) => {
      expect(positionInsideRow(pos)).toEqual(expectedValue);
    });

    each([
      ['undefined', undefined, ''],
      ['number', 2, '16px'],
      ['em', '1em', '1em'],
      ['rem', '1rem', '1rem'],
      ['px', '12px', '12px'],
    ]).it('gutter support value as %s', (unit, value, expected) => {
      render(
        <Row data-testid={'row'} gutter={value}>
          <Item />
          test
        </Row>
      );
      expect(screen.getByTestId('row')).toHaveStyle(
        expected ? `padding: ${expected}` : ''
      );
    });

    it('has display flex with direction=row', () => {
      render(
        <Row data-testid={'row'} gutter={2}>
          <Item>item</Item>
        </Row>
      );
      expect(screen.getByTestId('row')).toHaveStyle('display: flex');
      expect(screen.getByTestId('row')).not.toHaveStyle(
        'flex-direction: column'
      );
    });

    it('[direction: row] children has correct gutter', () => {
      render(
        <Row gutter={2}>
          <Item>item1</Item>
          <Item>item2</Item>
          <Item>item3</Item>
        </Row>
      );
      expect(screen.getByText(/item1/)).toHaveStyle('');
      expect(screen.getByText(/item2/)).toHaveStyle('padding-left: 16px');
      expect(screen.getByText(/item3/)).toHaveStyle('padding-left: 16px');
    });
  });

  describe('Column', () => {
    each([
      ['left', { alignSelf: 'flex-start' }],
      ['right', { alignSelf: 'flex-end' }],
      ['top', undefined],
      ['bottom', { marginTop: 'auto' }],
      ['middle', { marginTop: 'auto', marginBottom: 'auto' }],
      ['middle-right', { alignSelf: 'flex-end', marginTop: 'auto', marginBottom: 'auto' }],
      [
        'center',
        { alignSelf: 'center', marginTop: 'auto', marginBottom: 'auto' },
      ],
    ]).it('position: %s should return correct style', (pos, expectedValue) => {
      expect(positionInsideColumn(pos)).toEqual(expectedValue);
    });

    each([
      ['undefined', undefined, ''],
      ['number', 2, '16px'],
      ['em', '1em', '1em'],
      ['rem', '1rem', '1rem'],
      ['px', '12px', '12px'],
    ]).it('gutter support value as %s', (unit, value, expected) => {
      render(
        <Column data-testid={'column'} gutter={value}>
          <Item />
        </Column>
      );
      expect(screen.getByTestId('column')).toHaveStyle(
        expected ? `padding: ${expected}` : ''
      );
    });

    it('has display flex with direction=column', () => {
      render(
        <Column data-testid={'column'} gutter={2}>
          <Item>item</Item>
        </Column>
      );
      expect(screen.getByTestId('column')).toHaveStyle('display: flex');
      expect(screen.getByTestId('column')).toHaveStyle(
        'flex-direction: column'
      );
    });

    it('[direction: row] children has correct gutter', () => {
      render(
        <Column gutter={2}>
          <Item>item1</Item>
          <Item>item2</Item>
          <Item>item3</Item>
        </Column>
      );
      expect(screen.getByText(/item1/)).toHaveStyle('');
      expect(screen.getByText(/item2/)).toHaveStyle('padding-top: 16px');
      expect(screen.getByText(/item3/)).toHaveStyle('padding-top: 16px');
    });
  });

  describe('Item', () => {
    each([
      ['cssPosition', 'relative', 'position: relative'],
      ['grow', undefined, ''],
      ['grow', true, 'flex-grow: 1'],
      ['grow', 2, 'flex-grow: 2'],
      ['shrink', undefined, ''],
      ['shrink', 0, 'flex-shrink: 0'],
      ['shrink', 2, 'flex-shrink: 2'],
    ]).it(
      'accept props: %s and turn into correct css',
      (propName, value, expected) => {
        render(<Item {...{ [propName]: value }}>item</Item>);
        expect(screen.getByText('item')).toHaveStyle(expected);
      }
    );
  });

  describe('Nested', () => {
    it('NestedRow,Column has correct style', () => {
      render(
        <Row data-testid={'row'} gutter={2}>
          <Item>item1</Item>
          <Row data-testid={'nested-row'}>
            <Item>nested-row item1</Item>
            <Item>nested-row item2</Item>
          </Row>
          <Column data-testid={'nested-column'}>
            <Item>nested-column item1</Item>
            <Item>nested-column item2</Item>
            <Item>nested-column item3</Item>
          </Column>
        </Row>
      );
      expect(screen.getByTestId('nested-row')).toHaveStyle(
        `padding-left: 16px`
      );
      expect(screen.getByText('nested-row item1')).toHaveStyle('');
      expect(screen.getByText('nested-row item2')).toHaveStyle(
        'padding-left: 16px'
      );

      expect(screen.getByTestId('nested-column')).toHaveStyle(
        'padding-left: 16px'
      );
      expect(screen.getByText('nested-column item1')).toHaveStyle('');
      expect(screen.getByText('nested-column item2')).toHaveStyle(
        'padding-top: 16px'
      );
      expect(screen.getByText('nested-column item3')).toHaveStyle(
        'padding-top: 16px'
      );
    });

    it('Nested has correct gutter', () => {
      render(
        <Row gutter={2}>
          <Item>item1</Item>
          <Row gutter={1} data-testid={'nested-row'}>
            <Item>nested-row item1</Item>
            <Item>nested-row item2</Item>
          </Row>
          <Column gutter={3} data-testid={'nested-column'}>
            <Item>nested-column item1</Item>
            <Item>nested-column item2</Item>
            <Item>nested-column item3</Item>
          </Column>
        </Row>
      );
      expect(screen.getByTestId('nested-row')).not.toHaveStyle('padding: 8px 8px 8px 16px')
      expect(screen.getByTestId('nested-row')).toHaveStyle('padding-left: 16px')
      expect(screen.getByTestId('nested-column')).not.toHaveStyle('padding: 24px 24px 24px 16px')
      expect(screen.getByTestId('nested-column')).toHaveStyle('padding-left: 16px')
    })
  });

  describe('Real world', () => {
    const BasicProfile = (props: any) => {
      return (
        <Row data-testid={'basicProfile-row'} {...props}>
          <Avatar>S</Avatar>
          <Item data-testid={'basicProfile-item'} position={'middle'} pl={1}>
            <Typography>CREATOR</Typography>
            <Typography>siriwatknp</Typography>
          </Item>
        </Row>
      );
    };

    const CardHeader = (props: any) => {
      return (
        <Row data-testid={'cardHeader-row'} {...props}>
          <Item data-testid={'cardHeader-info'} position={'middle'}>
            <Typography>
              <b>Firebase</b>
            </Typography>
            <Typography>
              Similar to firebase theme
            </Typography>
          </Item>
          <Item data-testid={'cardHeader-iconBtn'} position={'right'} mr={-0.5}>
            <IconButton>
              <CallMade />
            </IconButton>
          </Item>
        </Row>
      );
    };

    it("Showcase direction:column should have correct style", () => {
      render(
        <Column gutter={2} data-testid={'column-root'}>
          <CardHeader />
          <Item>
            <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8}>

            </Box>
          </Item>
          <BasicProfile />
        </Column>
      )

      expect(screen.getByTestId('column-root')).toHaveStyle('padding: 16px');
      expect(screen.getByTestId('cardHeader-row')).not.toHaveStyle('padding: 16px');
      expect(screen.getByTestId('cardHeader-info')).toHaveStyle('align-self: center');
      expect(screen.getByTestId('cardHeader-iconBtn')).toHaveStyle('margin-left: auto; margin-right: -4px');

      expect(screen.getByTestId('basicProfile-row')).toHaveStyle('padding-top: 16px');
      expect(screen.getByTestId('basicProfile-item')).toHaveStyle('align-self: center; padding-left: 8px');
    })

    it("Showcase direction:row should have correct style", () => {
      render(
        <Row gutter={2} data-testid={'row-root'}>
          <Item>
            <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8}>

            </Box>
          </Item>
          <Column data-testid={'column-wrapper'}>
            <CardHeader />
            <BasicProfile position={'bottom'} />
          </Column>
        </Row>
      )

      expect(screen.getByTestId('row-root')).toHaveStyle('padding: 16px');
      expect(screen.getByTestId('column-wrapper')).toHaveStyle('padding-left: 16px');

      expect(screen.getByTestId('cardHeader-row')).not.toHaveStyle('padding: 16px');
      expect(screen.getByTestId('cardHeader-info')).toHaveStyle('align-self: center');
      expect(screen.getByTestId('cardHeader-iconBtn')).toHaveStyle('margin-left: auto; margin-right: -4px');

      expect(screen.getByTestId('basicProfile-row')).toHaveStyle('margin-top: auto; padding-top: 16px');
      expect(screen.getByTestId('basicProfile-item')).toHaveStyle('align-self: center; padding-left: 8px');
    })
  });
});
