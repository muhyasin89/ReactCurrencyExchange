import { render, screen } from '@testing-library/react';
import App from './App';

test('loading in app', () => {
  render(<App />);
  const loading = screen.getByText(/Loading/i);
  expect(loading).toBeInTheDocument();
});
