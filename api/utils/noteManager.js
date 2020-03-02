const tunings = {
  //string 1 - 6
  standard: [28, 23, 19, 14, 9, 4]
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

const octs_list = [2, 3, 4, 5];

const notesList = octs_list.reduce((notes, oct) => {
  const oct_notes = tones_list.map(n => `${n}${oct}`);
  return [...notes, ...oct_notes];
}, []);

const indexToNoteFile = idx => {
  const soundFileName = notesList[idx].replace("#", "s");
  return `/sound-files/${soundFileName}.mp3`;
};

module.exports = {
  getStartingNotes: () => {
    const doRand = () => Math.floor(Math.random() * 2); //0 or 1
    const randRange = 3; //pick note in range + - this value
    return tunings.standard.map(v => {
      return [
        v,
        doRand() ? v + Math.floor(Math.random() * randRange * 2) - randRange : v
      ];
    });
  },
  notesList
};
