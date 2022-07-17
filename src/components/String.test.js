import { render, screen } from '@testing-library/react';
import String from './String';

describe('string', () => {
  it('renders with correct note', () => {
    const comp = render(<String noteIndex={28} />);
    expect(screen.getByText('E')).toBeInTheDocument;
  });
});
