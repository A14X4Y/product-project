import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getCountervalue.test', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toBe(10);
  });
});
