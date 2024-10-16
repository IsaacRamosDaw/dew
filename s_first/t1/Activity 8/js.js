const audio = document.querySelector("audio");

// add play/pause buttons
const playPauseButton = document.getElementById("play-pause-button");
const volumeControl = document.getElementById("volume-control");

const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
  if(isPlaying){
    audio.pause();
    playPauseButton.textContent = "play";
  } else {
    audio.play();
    playPauseButton.textContent = "pause";
  }
  isPlaying = !isPlaying;
});

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);

  
  currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
  totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

  const progress = (currentTime / duration) * 100;
  progressBar.style.width = `${progress}%`;
})

// Miriam way

const mAudio = document.getElementsByTagName('audio')[0];
const mPlayButton = document.getElementById('play')[0];
const mBackwardButton = document.getElementById('backward')[0];
const mForwardButton = document.getElementById('forward')[0];

const tracks = ["music1.mp3", "music2.mp3", 'music3.mp3',];
let currenTrackIndex = 0;

function loadTrack(index) {
  mAudio.src = tracks[index];

  mAudio.load();
}

function playAndStop() {
  if (mAudio.paused) {
    mAudio.play;
  } else {
    audio.pause();
  }
}

function goToBackWard() {
  currenTrackIndex = (currenTrackIndex - 1 + tracks.length);
  loadTrack(currenTrackIndex);
  mAudio.play();
}

function goToForward() {
  currenTrackIndex = currenTrackIndex + 1;
  loadTrack(currenTrackIndex);
  mAudio.play();
}

mAudio.addEventListener('ended', goToForward);

mForwardButton.addEventListener('click', goToForward);
mPlayButton.addEventListener('click', playAndStop);
mBackwardButton.addEventListener('click', goToBackWard);