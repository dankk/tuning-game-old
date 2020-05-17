const tunings = {
  //string 1 - 6
  standard: [28, 23, 19, 14, 9, 4],
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
  "B",
];

const octs_list = [2, 3, 4, 5];

const notesList = octs_list.reduce((notes, oct) => {
  const oct_notes = tones_list.map((n) => `${n}${oct}`);
  return [...notes, ...oct_notes];
}, []);

const indexToNoteFile = (idx) => {
  const soundFileName = notesList[idx].replace("#", "s");
  return `/sound-files/${soundFileName}.mp3`;
};

module.exports = {
  getStartingData: (difficulty) => {
    console.log(difficulty);

    const randRange = 3; // +/- this many notes

    let randIndex = [];
    let startingNotes = tunings.standard.map((v) => v);
    for (let i = 0; i < difficulty; i++) {
      var r = Math.floor(Math.random() * 6);
      while (randIndex.includes(r)) {
        r = Math.floor(Math.random() * 6);
      }
      randIndex.push(r);
    }
    console.log(randIndex);
    console.log(startingNotes);

    randIndex.forEach((v) => {
      const n = startingNotes[v];
      let diff = Math.floor(Math.random() * randRange * 2) - randRange;
      while (diff === 0) {
        diff = Math.floor(Math.random() * randRange * 2) - randRange;
      }
      startingNotes[v] = n + diff;
    });
    console.log(startingNotes);

    return {
      correctNotes: tunings.standard,
      startingNotes,
      notesList: notesList,
    };
  },
};
