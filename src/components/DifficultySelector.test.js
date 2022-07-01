import { render, screen } from '@testing-library/react';
import DifficultySelector from './DifficultySelector';

it('renders difficulty selector', () => {
  const component = render(
    <DifficultySelector difficulty={5} handleChangeDifficulty={() => null} />,
  );
  const input = component.baseElement.querySelector('input');
  expect(input.value).toBe('5');
});
