interface DifficultySelectorInterface {
  difficulty: number;
  handleChangeDifficulty: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStart: () => void;
}

interface StringInterface {
  stringIndex: number;
  noteIndex: number;
  isWrong?: boolean;
  changeNote: (ind: number, dir: 'up' | 'down') => void;
}

interface StringsInterface {
  difficulty: number;
}

interface StringData {
  noteIndex: number;
  isWrong?: boolean;
}

type Direction = 'up' | 'down';

interface NoteInterface {
  note: string;
  octave: number;
}
