const tones_list = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#"
];

const octs_list = [1, 2, 3, 4];

export const notes_list = octs_list.reduce((notes, oct) => {
  const oct_notes = tones_list.map(n => `${n}${oct}`);
  return [...notes, ...oct_notes];
}, []);
