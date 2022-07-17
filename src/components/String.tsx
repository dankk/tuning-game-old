import { noteList } from '../utils/notes';

interface StringInterface {
  noteIndex: number;
  incrementNote: () => void;
}

function String({ noteIndex, incrementNote }: StringInterface) {
  const note = noteList[noteIndex];
  return (
    <div style={{ display: 'flex' }}>
      <div>{'<--'}</div>
      <div className="stringNote">{note.note}</div>
      <div onClick={incrementNote} className="incrementNote">
        {'-->'}
      </div>
    </div>
  );
}

export default String;
