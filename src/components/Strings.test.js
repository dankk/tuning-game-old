import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Strings from './Strings';

describe('strings', () => {
  it('renders 6 strings with starting notes', () => {
    const startingNotes = ['E', 'A', 'D', 'G', 'B', 'E'];
    const { container } = render(<Strings difficulty={4} />);
    const strings = container.getElementsByClassName('stringNote');
    expect(strings).toHaveLength(6);
    for (const i of startingNotes) {
      screen.getAllByText(i);
    }
  });

  it('increments string note', async () => {
    const user = userEvent.setup();
    render(<Strings difficulty={1} />);
    const string = screen.getByText('B');
    expect(screen.queryByText('C')).not.toBeInTheDocument;
    const nextButton = string.parentElement.querySelector('.incrementNote');
    await user.click(nextButton);
    expect(screen.queryByText('B')).not.toBeInTheDocument;
    expect(screen.queryByText('C')).toBeInTheDocument;
  });
});
