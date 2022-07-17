import String from './String';
import { v4 } from 'uuid';
import { tunings } from '../utils/notes';
import { useState } from 'react';

interface StringsInterface {
  difficulty: number;
}

const startingNotes = tunings.standard;

function Strings({ difficulty }: StringsInterface) {
  const [noteIndices, setNoteIndices] = useState(startingNotes);

  const incrementNote = (stringIndex: number) => {
    setNoteIndices((s) => s.map((noteIndex, i) => (stringIndex === i ? noteIndex + 1 : noteIndex)));
  };

  return (
    <div>
      <div>Difficulty: {difficulty}</div>
      {noteIndices.map((noteIndex, i) => (
        <String key={v4()} noteIndex={noteIndex} incrementNote={() => incrementNote(i)} />
      ))}
    </div>
  );
}

export default Strings;
