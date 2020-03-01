import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import usePreserveState from './usePreserveState';

describe('useStateBinding 2', () => {

  it('onChange is not called at first mount', () => {
    const onChange = jest.fn();
    renderHook(() => usePreserveState(false, onChange));

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('accept bindValue', () => {
    const { result } = renderHook(() => usePreserveState(false));

    expect(result.current[0]).toBe(false);
  });

  it('can setValue', () => {
    const { result } = renderHook(() => usePreserveState(false));

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toBe(true);
  });

  it('update state when external value change', () => {
    let bindValue = false;
    const { result, rerender } = renderHook(() => usePreserveState(bindValue));

    bindValue = true;
    rerender();

    expect(result.current[0]).toBe(true);
  });

  it('call onChange when internal state change', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => usePreserveState(false, onChange));

    act(() => {
      result.current[1](true);
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('bypass preserving state if true', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() =>
      usePreserveState(false, onChange, true)
    );

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
