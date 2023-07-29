import { ListInputs } from './midi.mjs';

export default (args) => {
  const midiInputName = args[2];
  if (!midiInputName) return ListInputs()[0];

  return args[2];
}