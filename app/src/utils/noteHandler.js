export const indexToNoteFile = (idx, notesList) => {
  const soundFileName = notesList[idx].replace("#", "s");
  return `/sound-files/${soundFileName}.mp3`;
};
