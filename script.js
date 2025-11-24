//your JS code here. If required.
let currentAudio = null;

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const soundFile = button.getAttribute('data-sound');
      if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = new Audio(`sounds/${soundFile}`);
      currentAudio.play();
    });
  });

  const stopButton = document.querySelector('.stop');
  stopButton.addEventListener('click', () => {
    if(currentAudio){
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
  });