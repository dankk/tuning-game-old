import { render, screen } from '@testing-library/react';
import App from './App';

it('renders test', () => {
  render(<App />);
  expect(screen.getByText('test')).toBeInTheDocument;
});
