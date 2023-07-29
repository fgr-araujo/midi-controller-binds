import {runAppleScript} from 'run-applescript';

const spotifyPlayPause = `
tell application "Spotify"
	playpause
end tell
`;

async function run() {
  await runAppleScript(spotifyPlayPause);
  setTimeout(async () => {
    await runAppleScript(spotifyPlayPause);
  }, 2000);
}

run();