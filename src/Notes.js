const tones_list = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
];

const octs_list = [1, 2, 3, 4];

export const notes_list = octs_list.reduce((notes, oct) => {
  const oct_notes = tones_list.map(n => `${n}${oct}`);
  return [...notes, ...oct_notes];
}, []);
