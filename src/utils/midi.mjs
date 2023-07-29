import easymidi from 'easymidi';

export const ListInputs = () => {
  const inputs = easymidi.getInputs();
  return inputs;
}