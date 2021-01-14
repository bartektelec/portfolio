import * as React from 'react';
import Navigation from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Navigation component', () => {
  it('should render', () => {
    const { getByTestId } = render(<Navigation />);
    expect(getByTestId('nav')).toBeVisible();
  });
  it('should disappear when scroll down', () => {
    const { getByTestId } = render(<Navigation />);
    fireEvent.scroll(window, { y: 300 });

    expect(getByTestId('nav')).toHaveStyle({ top: '-60px' });
  });
});
