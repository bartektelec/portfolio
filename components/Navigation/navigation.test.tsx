import * as React from 'react';
import Navigation from './index';
import { render } from '@testing-library/react';

describe('Navigation component', () => {
  it('should render', () => {
    const { getByTestId } = render(<Navigation />);
    expect(getByTestId('nav')).toBeVisible();
  });
});
