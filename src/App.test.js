import { render, screen } from '@testing-library/react';
import App from './App';

it('renders difficulty selector', () => {
  render(<App />);
  expect(screen.getByRole('slider')).toBeInTheDocument;
});
