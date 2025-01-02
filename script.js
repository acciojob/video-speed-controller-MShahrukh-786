const video = document.querySelector('.video');
const toggle = document.querySelector('.player__button');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const rewind = document.querySelector('.rewind');
const fastforward = document.querySelector('.fastforward');

// Toggle Play/Pause
function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚';
    } else {
        video.pause();
        toggle.textContent = '►';
    }
}

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Rewind and Fast Forward
function skip(amount) {
    video.currentTime += amount;
}

// Set Volume
function handleVolume() {
    video.volume = this.value;
}

// Set Playback Speed
function handleSpeed() {
    video.playbackRate = this.value;
}

// Seek
function handleSeek(e) {
    const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = seekTime;
}

// Event Listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
rewind.addEventListener('click', () => skip(-10));
fastforward.addEventListener('click', () => skip(25));
volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handleSpeed);
progress.addEventListener('click', handleSeek);