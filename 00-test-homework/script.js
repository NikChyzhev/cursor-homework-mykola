function playSoundOnButton(e){  
  const audio = this.document.querySelector(`audio[id='${e.keyCode}']`);
  const key = this.document.querySelector(`.key[id='${e.keyCode}']`)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

function playSoundOnClick(e){  
  const audio = this.document.querySelector(`audio[id='${e.path[1].id}']`);
  const key = this.document.querySelector(`.key[id='${e.path[1].id}']`)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSoundOnButton);
window.addEventListener('click', playSoundOnClick);