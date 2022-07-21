import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Strings from './Strings';

describe('strings', () => {
  const user = userEvent.setup();
  it('renders 6 strings with starting notes', () => {
    const startingNotes = ['E', 'A', 'D', 'G', 'B', 'E'];
    const { container } = render(<Strings difficulty={0} />);
    const strings = container.getElementsByClassName('stringNote');
    expect(strings).toHaveLength(6);
    for (const i of startingNotes) {
      screen.getAllByText(i);
    }
  });

  it('increments string note', async () => {
    render(<Strings difficulty={0} />);
    const string = screen.getByText('B');
    expect(screen.queryByText('C')).not.toBeInTheDocument;
    const nextButton = string.parentElement.querySelector('.incrementNote');
    await user.click(nextButton);
    expect(screen.queryByText('B')).not.toBeInTheDocument;
    expect(screen.queryByText('C')).toBeInTheDocument;
  });

  it('decrements string note', async () => {
    render(<Strings difficulty={0} />);
    const string = screen.getByText('D');
    expect(screen.queryByText('C#')).not.toBeInTheDocument;
    const nextButton = string.parentElement.querySelector('.decrementNote');
    await user.click(nextButton);
    expect(screen.queryByText('D')).not.toBeInTheDocument;
    expect(screen.queryByText('C#')).toBeInTheDocument;
  });

  it('render correct number of guess notes', async () => {
    const { container } = render(<Strings difficulty={3} />);
    const strings = container.getElementsByClassName('stringNote');
    expect(screen.getAllByText('?')).toHaveLength(3);
  });
});
