import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchComponent from '../search.component';

test('renders input labels', () => {
  render(<SearchComponent />);
  const JobLabel = screen.getByLabelText('Job');
  expect(JobLabel).toBeInTheDocument();

  const locationLbl = screen.getByLabelText('Location');
  expect(locationLbl).toBeInTheDocument();

  const radiusLbl = screen.getByLabelText('Radius Miles');
  expect(radiusLbl).toBeInTheDocument();

  const searchBtn = screen.getByText('Find a Job!');
  expect(searchBtn).toBeInTheDocument();
});
