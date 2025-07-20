import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search bar label', () => {
  render(<App />);
  const searchInput = screen.getByLabelText('Search...');
  expect(searchInput).toBeInTheDocument();
});
