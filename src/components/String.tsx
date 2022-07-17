import { noteList } from '../utils/notes';

interface StringInterface {
  stringIndex: number;
  noteIndex: number;
  changeNote: (ind: number, dir: 'up' | 'down') => void;
}

function String({ stringIndex, noteIndex, changeNote }: StringInterface) {
  const note = noteList[noteIndex];
  return (
    <div style={{ display: 'flex' }}>
      <div onClick={() => changeNote(stringIndex, 'down')}>{'<--'}</div>
      <div className="stringNote">{note.note}</div>
      <div onClick={() => changeNote(stringIndex, 'up')} className="incrementNote">
        {'-->'}
      </div>
    </div>
  );
}

export default String;
