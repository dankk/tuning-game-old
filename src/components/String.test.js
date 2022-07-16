import { render, screen } from '@testing-library/react';
import String from './String';

describe('string', () => {
  it('renders with correct index', () => {
    const comp = render(<String index={3} />);
    expect(screen.getByText('string: 3')).toBeInTheDocument;
  });
});
