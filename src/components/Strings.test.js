import { render, screen } from '@testing-library/react';
import Strings from './Strings';

describe('strings', () => {
  it('renders 6 strings with starting notes', () => {
    const startingNotes = ['E', 'A', 'D', 'G', 'B'];
    render(<Strings difficulty={4} />);
    const strings = screen.getAllByText(/string/);
    expect(strings).toHaveLength(6);
  });
});
