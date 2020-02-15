import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Birthday, { BirthdayConsumer } from './index';

describe('BirthdayTextField', () => {
  it('render without clashes', () => {
    expect(() => {
      render(
        <Birthday>
          <Birthday.Day />
          <Birthday.Month />
          <Birthday.Year />
        </Birthday>
      );
    }).not.toThrow();
  });

  it('able to find inputs', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Birthday id={'dob'} label={'Date of birth'}>
        <Birthday.Day placeholder={'DD'} />
        <Birthday.Month placeholder={'MM'} />
        <Birthday.Year placeholder={'YYYY'} />
      </Birthday>
    );

    expect(getByLabelText('Date of birth')).toHaveValue('');
    expect(getByPlaceholderText('DD')).toHaveValue('');
    expect(getByPlaceholderText('MM')).toHaveValue('');
    expect(getByPlaceholderText('YYYY')).toHaveValue('');
  });

  it('update value when day changes', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Birthday id={'dob'} label={'Date of birth'}>
        <Birthday.Day placeholder={'DD'} />
      </Birthday>
    );
    const input = getByPlaceholderText('DD');
    fireEvent.change(input, { target: { value: '09' } });
    expect(input).toHaveValue('09');
    expect(getByLabelText('Date of birth')).toHaveValue('09');
  });

  it('update value when only month changes', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Birthday id={'dob'} label={'Date of birth'}>
        <Birthday.Month placeholder={'MM'} />
      </Birthday>
    );

    const input = getByPlaceholderText('MM');
    fireEvent.change(input, { target: { value: '12' } });
    expect(input).toHaveValue('12');
    expect(getByLabelText('Date of birth')).toHaveValue('12');
  });

  it('update value when only year changes', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Birthday id={'dob'} label={'Date of birth'}>
        <Birthday.Year placeholder={'YYYY'} />
      </Birthday>
    );

    const input = getByPlaceholderText('YYYY');
    fireEvent.change(input, { target: { value: '1994' } });
    expect(input).toHaveValue('1994');
    expect(getByLabelText('Date of birth')).toHaveValue('1994');
  });

  it('update value when day & month change (ISO-8601)', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Birthday id={'dob'} label={'Date of birth'}>
        <Birthday.Day placeholder={'DD'} />
        <Birthday.Month placeholder={'MM'} />
      </Birthday>
    );

    const dayInput = getByPlaceholderText('DD');
    const monthInput = getByPlaceholderText('MM');
    fireEvent.change(dayInput, { target: { value: '29' } });
    fireEvent.change(monthInput, { target: { value: '04' } });
    expect(getByLabelText('Date of birth')).toHaveValue('--04-29');
  });

  it('update value when all change (ISO-8601)', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Birthday id={'dob'} label={'Date of birth'}>
        <Birthday.Day placeholder={'DD'} />
        <Birthday.Month placeholder={'MM'} />
        <Birthday.Year placeholder={'YYYY'} />
      </Birthday>
    );

    const dayInput = getByPlaceholderText('DD');
    const monthInput = getByPlaceholderText('MM');
    const yearInput = getByPlaceholderText('YYYY');
    fireEvent.change(dayInput, { target: { value: '29' } });
    fireEvent.change(monthInput, { target: { value: '04' } });
    fireEvent.change(yearInput, { target: { value: '2000' } });
    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
  });

  it('attach zero to day or month if user type only 1 char', () => {
    const { getByPlaceholderText } = render(
      <Birthday id={'dob'} label={'Date of birth'}>
        <Birthday.Day placeholder={'DD'} />
        <Birthday.Month placeholder={'MM'} />
      </Birthday>
    );

    const dayInput = getByPlaceholderText('DD');
    fireEvent.change(dayInput, { target: { value: '2' } });
    fireEvent.blur(dayInput);
    expect(dayInput).toHaveValue('02');

    const monthInput = getByPlaceholderText('MM');
    fireEvent.change(monthInput, { target: { value: '6' } });
    fireEvent.blur(monthInput);
    expect(monthInput).toHaveValue('06');
  });

  it('able to disable prefix zero', () => {
    const { getByPlaceholderText } = render(
      <Birthday id={'dob'} label={'Date of birth'}>
        <Birthday.Day placeholder={'DD'} zeroPrefixDisabled />
        <Birthday.Month placeholder={'MM'} zeroPrefixDisabled />
      </Birthday>
    );

    const dayInput = getByPlaceholderText('DD');
    fireEvent.change(dayInput, { target: { value: '2' } });
    fireEvent.blur(dayInput);
    expect(dayInput).toHaveValue('2');

    const monthInput = getByPlaceholderText('MM');
    fireEvent.change(monthInput, { target: { value: '6' } });
    fireEvent.blur(monthInput);
    expect(monthInput).toHaveValue('6');
  });

  it('auto focus at next input when fill info complete', () => {
    const { getByPlaceholderText, container } = render(
      <Birthday id={'dob'} label={'Date of birth'}>
        <Birthday.Day placeholder={'DD'} nextFocus={'birthday.month'} />
        <Birthday.Month name={'birthday.month'} nextFocus={'birthday.year'} />
        <Birthday.Year name={'birthday.year'} />
      </Birthday>
    );

    const dayInput = getByPlaceholderText('DD');
    fireEvent.focus(dayInput);
    fireEvent.change(dayInput, { target: { value: '02' } });

    const monthInput = container.querySelector('input[name="birthday.month"]');
    expect(document.activeElement === monthInput).toBeTruthy();
    fireEvent.change(monthInput, { target: { value: '12' } });

    const yearInput = container.querySelector('input[name="birthday.year"]');
    expect(document.activeElement === yearInput).toBeTruthy();
  });

  it('able to reset to initialValue', () => {
    const { getByTestId, getByPlaceholderText, getByLabelText } = render(
      <Birthday
        id={'dob'}
        label={'Date of birth'}
        display={{ day: '29', month: '04', year: '2000' }}
        value={'2000-04-29'}
      >
        <Birthday.Day placeholder={'DD'} />
        <Birthday.Month placeholder={'MM'} />
        <Birthday.Year placeholder={'YYYY'} />
        <BirthdayConsumer>
          {({ reset, clear }) => (
            <>
              <button data-testid={'reset-btn'} onClick={() => reset()} />
              <button data-testid={'clear-btn'} onClick={() => clear()} />
            </>
          )}
        </BirthdayConsumer>
      </Birthday>
    );

    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
    const dayInput = getByPlaceholderText('DD');
    const monthInput = getByPlaceholderText('MM');
    const yearInput = getByPlaceholderText('YYYY');
    fireEvent.change(dayInput, { target: { value: '12' } });
    fireEvent.change(monthInput, { target: { value: '12' } });
    fireEvent.change(yearInput, { target: { value: '1999' } });
    expect(getByLabelText('Date of birth')).toHaveValue('1999-12-12');
    fireEvent.click(getByTestId('reset-btn'));
    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
    fireEvent.click(getByTestId('clear-btn'));
    expect(getByLabelText('Date of birth')).toHaveValue('');
  });

  it('able to pass custom toValue fn', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Birthday
        id={'dob'}
        label={'Date of birth'}
        display={{ day: '29', month: '04', year: '2000' }}
        value={'2000-04-29'}
        toValue={({ day, month, year }) => `${day}/${month}/${year}`}
      >
        <Birthday.Day placeholder={'DD'} />
        <Birthday.Month placeholder={'MM'} />
        <Birthday.Year placeholder={'YYYY'} />
      </Birthday>
    );

    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
    const monthInput = getByPlaceholderText('MM');
    fireEvent.change(monthInput, { target: { value: '7' } });
    fireEvent.blur(monthInput);
    expect(getByLabelText('Date of birth')).toHaveValue('29/07/2000');
  });
});
