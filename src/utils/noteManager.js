const tunings = {
  //string 1 - 6
  standard: [40, 35, 31, 26, 21, 16]
};

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

export const indexToNoteFile = idx => {
  const soundFileName = notes_list[idx].replace("#", "s");
  return `/sound-files/${soundFileName}.mp3`;
};

export const getStartingNotes = () => {
  //based on difficulty selection?
  return tunings.standard.map(v => {
    return v + Math.floor(Math.random() * 10) - 5;
  });
};
