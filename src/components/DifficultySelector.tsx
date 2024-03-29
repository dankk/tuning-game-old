function DifficultySelector(props: DifficultySelectorInterface) {
  const { difficulty, handleChangeDifficulty, handleStart } = props;

  return (
    <div>
      <div>Difficulty: {difficulty}</div>
      <input
        id="difficulty-selector"
        type="range"
        min={1}
        max={6}
        value={difficulty}
        onChange={handleChangeDifficulty}
      />
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default DifficultySelector;
