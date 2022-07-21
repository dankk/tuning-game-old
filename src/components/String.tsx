import { noteList } from '../utils/notes';

interface StringInterface {
  stringIndex: number;
  noteIndex: number;
  isWrong?: boolean;
  changeNote: (ind: number, dir: 'up' | 'down') => void;
}

function String({ stringIndex, noteIndex, isWrong, changeNote }: StringInterface) {
  const note = noteList[noteIndex];
  return (
    <div style={{ display: 'flex' }}>
      <div onClick={() => changeNote(stringIndex, 'down')} className="decrementNote">
        {'<--'}
      </div>
      <div className="stringNote">{isWrong ? '?' : note.note}</div>
      <div onClick={() => changeNote(stringIndex, 'up')} className="incrementNote">
        {'-->'}
      </div>
    </div>
  );
}

export default String;
