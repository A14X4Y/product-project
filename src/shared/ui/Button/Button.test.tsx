/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
describe('Button', () => {
  test('Button render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Button theme', () => {
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
