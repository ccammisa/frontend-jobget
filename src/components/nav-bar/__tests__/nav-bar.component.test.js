import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBarComponent from '../nav-bar.component';

test('renders nav Bar', () => {
  render(<NavBarComponent />);
  const navText = screen.getByText('Job Search');
  expect(navText).toBeInTheDocument();

});
