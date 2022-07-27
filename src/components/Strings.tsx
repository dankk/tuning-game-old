import String from './String';
import { v4 } from 'uuid';
import { noteList, randomizedTuning, tunings } from '../utils/notes';
import { useEffect, useState } from 'react';
import { playNote } from '../utils/sounds';

const baseNotes = tunings.standard;

const canChangeNote = (direction: Direction, noteIndex: number) => {
  if (direction === 'up' && noteIndex >= noteList.length - 1) return false;
  if (direction === 'down' && noteIndex <= 0) return false;
  return true;
};

function Strings({ difficulty }: StringsInterface) {
  const [stringData, setStringData] = useState<StringData[] | null>();

  useEffect(() => {
    const startingNotes = randomizedTuning(baseNotes, difficulty);
    setStringData(startingNotes);
  }, []);

  const changeNote = (stringIndex: number, direction: Direction) => {
    if (!stringData) return;
    const change = direction === 'up' ? 1 : -1;
    if (!canChangeNote(direction, stringData[stringIndex].noteIndex)) return;
    setStringData((state) =>
      state?.map((string, i) =>
        stringIndex === i ? { ...string, noteIndex: string.noteIndex + change } : { ...string },
      ),
    );
    playNote(stringData[stringIndex].noteIndex + change);
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
