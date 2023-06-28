import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  }); 
});


