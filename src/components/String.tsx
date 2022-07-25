import { noteList } from '../utils/notes';

function String({ stringIndex, noteIndex, isWrong, changeNote }: StringInterface) {
  const note = noteList[noteIndex];
  return (
    <div style={{ display: 'flex' }}>
      {isWrong ? null : (
        <div onClick={() => changeNote(stringIndex, 'down')} className="decrementNote">
          {'<--'}
        </div>
      )}
      <div className="stringNote">{isWrong ? '?' : note.note}</div>
      {isWrong ? null : (
        <div onClick={() => changeNote(stringIndex, 'up')} className="incrementNote">
          {'-->'}
        </div>
      )}
    </div>
  );
}

export default String;
