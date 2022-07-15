import { useState } from 'react';
import DifficultySelector from './components/DifficultySelector';
import Strings from './components/Strings';

function App() {
  const [difficulty, setDifficulty] = useState(1);
  const [started, setStarted] = useState(false);

  const handleChangeDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDifficulty(parseInt(e.target.value));
  };

  const handleStart = () => {
    setStarted(true);
  };

  return !started ? (
    <DifficultySelector
      difficulty={difficulty}
      handleChangeDifficulty={handleChangeDifficulty}
      handleStart={handleStart}
    />
  ) : (
    <Strings difficulty={difficulty} />
  );
}

export default App;
