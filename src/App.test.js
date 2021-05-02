import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('We love our super-fans!');
  expect(linkElement).toBeInTheDocument();
});
