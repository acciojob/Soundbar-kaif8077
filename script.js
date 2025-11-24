const audioPlayer = document.getElementById('audioPlayer');
let currentAudioSrc = null;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');
    if (currentAudioSrc === soundFile) {
      // If same sound playing, restart it
      audioPlayer.currentTime = 0;
    } else {
      currentAudioSrc = soundFile;
      audioPlayer.src = `sounds/${soundFile}`;
    }
    audioPlayer.play();
  });
});

const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  currentAudioSrc = null;
});
