import { renderHook, act } from '@testing-library/react';
import useCounter  from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize counter to 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment the counter', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});