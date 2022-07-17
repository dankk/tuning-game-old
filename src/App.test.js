import { act, render, screen } from '@testing-library/react';
import App from './App';

describe('app', () => {
  it('contains difficulty selector on start', () => {
    render(<App />);
    expect(screen.getByRole('slider')).toBeInTheDocument;
  });

  it('shows strings when started', async () => {
    render(<App />);
    const button = screen.getByText('Start');
    act(() => {
      button.click();
    });
    expect(await screen.findByText('B')).toBeInTheDocument;
  });
});
