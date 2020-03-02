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

const octs_list = [2, 3, 4, 5];

export const notes_list = octs_list.reduce((notes, oct) => {
  const oct_notes = tones_list.map(n => `${n}${oct}`);
  return [...notes, ...oct_notes];
}, []);

export const indexToNoteFile = idx => {
  const soundFileName = notes_list[idx].replace("#", "s");
  return `/sound-files/${soundFileName}.mp3`;
};
