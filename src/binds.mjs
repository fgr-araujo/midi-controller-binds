import easymidi from 'easymidi';
import robot from "robotjs";
import BindList from './binds/index.mjs';
import GetMidiInputs from './utils/get-midi-input.mjs';

const midiInput = GetMidiInputs(process.argv);
const input = new easymidi.Input(midiInput);

function getEventMethods(msg) {
  if (msg.velocity === 0) return false;
  const channel = msg.channel;
  const note = msg.note;
  const eventName = `${channel}${note}`;

  return BindList[eventName];
}


input.on('noteon', function (msg) {
  // console.log(msg)
  const eventDetail = getEventMethods(msg);

  if (!eventDetail) return;
  robot.keyTap(eventDetail.keyEvent)
});