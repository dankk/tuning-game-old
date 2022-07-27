import Synth from './audiosynth';
import { noteList } from './notes';

Synth.setVolume(0.3);
const guitar = Synth.createInstrument(2);

export function playNote(noteIndex) {
  const { note, octave } = noteList[noteIndex];
  guitar.play(note, octave, 1);
}
