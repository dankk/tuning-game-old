import { useState } from 'react';
import DifficultySelector from './components/DifficultySelector';

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
    <>started</>
  );
}

export default App;
