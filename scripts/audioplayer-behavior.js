const playList = [
  {
    title: 'Aqua Caelestis',
    src: 'assets/audio/Aqua_Caelestis.mp3',
    duration: '0:39'
  }, 
  {
    title: 'River Flows In You',
    src: 'assets/audio/River_Flows_In_You.mp3',
    duration: '1:37'
  }, 
  {
    title: 'Summer Wind',
    src: 'assets/audio/Summer_Wind.mp3',
    duratioS: '1:50'
  }, 
  {
    title: 'Ennio Morricone',
    src: 'assets/audio/Ennio_Morricone.mp3',
    duration: '1:37'
  }, 
]
const audio = new Audio();
const playListDOMElem = document.querySelector('.play_list');
const playButton = document.querySelector('.play');
const playPrevButton = document.querySelector('.play_prev');
const playNextButton = document.querySelector('.play_next');


playList.forEach(track => {
  let audioTrackDOMElem = document.createElement('li');
  audioTrackDOMElem.classList.add('play_item');
  audioTrackDOMElem.innerHTML = track.title;
  playListDOMElem.appendChild(audioTrackDOMElem);
});


let isPlay = false;
let currentAudio = 0;


playButton.addEventListener('click', () => {
  playListDOMElem.childNodes.item(currentAudio).classList.add('item_active');
  if (!isPlay) {
    isPlay = true;
    playButton.classList.add('pause');
    audio.src = playList[currentAudio].src;
    audio.play();
  } else {
    isPlay = false;
    playButton.classList.remove('pause');
    audio.pause();
  }
});

playNextButton.addEventListener('click', () => {
  isPlay = true;
  playListDOMElem.childNodes.item(currentAudio).classList.remove('item_active');
  currentAudio = (currentAudio + 1) % 4;
  playListDOMElem.childNodes.item(currentAudio).classList.add('item_active');
  if (!playButton.classList.contains('pause')) {
    playButton.classList.add('pause');
  }
  audio.src = playList[currentAudio].src;
  audio.play();
});

playPrevButton.addEventListener('click', () => {
  isPlay = true;
  playListDOMElem.childNodes.item(currentAudio).classList.remove('item_active');
  currentAudio--;
  if (currentAudio == -1) {
    currentAudio = 3;
  }
  playListDOMElem.childNodes.item(currentAudio).classList.add('item_active');
  if (!playButton.classList.contains('pause')) {
    playButton.classList.add('pause');
  }
  audio.src = playList[currentAudio].src;
  audio.play();
});

audio.addEventListener('ended', () => {
  playNextButton.dispatchEvent(new Event('click'));
});



