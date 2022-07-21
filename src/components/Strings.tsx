import String from './String';
import { v4 } from 'uuid';
import { randomizedTuning, tunings } from '../utils/notes';
import { useEffect, useState } from 'react';

interface StringsInterface {
  difficulty: number;
}

interface StringData {
  noteIndex: number;
  isWrong?: boolean;
}

const baseNotes = tunings.standard;

function Strings({ difficulty }: StringsInterface) {
  const [stringData, setStringData] = useState<StringData[] | null>();

  useEffect(() => {
    const startingNotes = randomizedTuning(baseNotes, difficulty);
    setStringData(startingNotes);
  }, []);

  const changeNote = (stringIndex: number, direction: 'up' | 'down') => {
    const change = direction === 'up' ? 1 : -1;
    setStringData((state) =>
      state?.map((string, i) =>
        stringIndex === i ? { ...string, noteIndex: string.noteIndex + change } : { ...string },
      ),
    );
  };

  if (!stringData) return null;

  return (
    <div className="stringGroup">
      <div>Difficulty: {difficulty}</div>
      {stringData.map((string, i) => (
        <String
          key={v4()}
          stringIndex={i}
          noteIndex={string.noteIndex}
          isWrong={string.isWrong}
          changeNote={changeNote}
        />
      ))}
    </div>
  );
}

export default Strings;
