import { render, screen } from '@testing-library/react';
import DifficultySelector from './DifficultySelector';

describe('difficulty selector', () => {
  it('renders', () => {
    const component = render(
      <DifficultySelector difficulty={5} handleChangeDifficulty={() => null} />,
    );
    const input = component.baseElement.querySelector('input');
    expect(input.value).toBe('5');
  });
});
