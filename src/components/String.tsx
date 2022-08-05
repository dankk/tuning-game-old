import { noteList } from '../utils/notes';
import { playNote } from '../utils/sounds';

function String({ stringIndex, noteIndex, isWrong, changeNote }: StringInterface) {
  const note = noteList[noteIndex];
  const playCurrentNote = () => playNote(noteIndex);
  return (
    <div style={{ display: 'flex' }}>
      {isWrong ? (
        <div onClick={() => changeNote(stringIndex, 'down')} className="decrementNote">
          {'<--'}
        </div>
      ) : null}
      <div className="stringNote" onClick={playCurrentNote}>
        {isWrong ? '?' : note.note}
      </div>
      {isWrong ? (
        <div onClick={() => changeNote(stringIndex, 'up')} className="incrementNote">
          {'-->'}
        </div>
      ) : null}
    </div>
  );
}

export default String;
