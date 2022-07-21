export const toneList = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const octList = [2, 3, 4, 5];

interface NoteInterface {
  note: string;
  oct: number;
}

export const noteList = octList.reduce((notes: any, oct) => {
  return [...notes, ...toneList.map((n) => ({ note: n, octave: oct }))];
}, []) as NoteInterface[];

export const tunings = {
  //string 1 - 6
  standard: [28, 23, 19, 14, 9, 4],
};

export const randomizedTuning = (originalTuning: number[], numStringsToRandomize: number) => {
  //n random numbers from 0-5
  const randomIndices = new Set();
  while (randomIndices.size < numStringsToRandomize) {
    randomIndices.add(Math.floor(Math.random() * 6));
  }
  let diff = 3;
  const newTuning = originalTuning.map((noteIndex: number, i: number) =>
    randomIndices.has(i) ? { noteIndex: noteIndex + diff, isWrong: true } : { noteIndex },
  );
  return newTuning;
};
