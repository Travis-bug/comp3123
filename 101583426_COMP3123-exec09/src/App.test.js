import { render, screen } from '@testing-library/react';
import App from './App';

test('shows the lab information', () => {
  render(<App />);
  expect(screen.getByText('Welcome to Fullstack Development - I')).toBeInTheDocument();
  expect(screen.getByText('React JS Programming Week09 Lab exercise')).toBeInTheDocument();
  expect(screen.getByText('101583426')).toBeInTheDocument();
  expect(screen.getByText('Travis Eweka')).toBeInTheDocument();
  expect(screen.getByText('George Brown Polytechnic, Toronto')).toBeInTheDocument();
});
