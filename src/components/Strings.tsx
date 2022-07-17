import String from './String';
import { v4 } from 'uuid';
import { randomizedTuning, tunings } from '../utils/notes';
import { useEffect, useState } from 'react';

interface StringsInterface {
  difficulty: number;
}

const baseNotes = tunings.standard;

function Strings({ difficulty }: StringsInterface) {
  const [noteIndices, setNoteIndices] = useState<number[] | null>();

  useEffect(() => {
    const startingNotes = randomizedTuning(baseNotes, difficulty);
    setNoteIndices(startingNotes);
  }, []);

  const changeNote = (stringIndex: number, direction: 'up' | 'down') => {
    const change = direction === 'up' ? 1 : -1;
    setNoteIndices((s) =>
      s?.map((noteIndex, i) => (stringIndex === i ? noteIndex + change : noteIndex)),
    );
  };

  if (!noteIndices) return null;

  return (
    <div>
      <div>Difficulty: {difficulty}</div>
      {noteIndices.map((noteIndex, i) => (
        <String key={v4()} stringIndex={i} noteIndex={noteIndex} changeNote={changeNote} />
      ))}
    </div>
  );
}

export default Strings;
