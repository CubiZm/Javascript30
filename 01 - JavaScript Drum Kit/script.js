function playSound(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if (!audio) {
    return;
  }
  
  audio.play();
  audio.currentTime = 0;

  key.classList.add('playing');

};

function deleteTransition(e) {
  if (e.propertyName !== 'transform') {
    return;
  }
//  console.log('e.propertyName');
  this.classList.remove('playing')
}

// ES6 syntax
//const keys = document.querySelectorAll('.key');
//keys.forEach(key => key.addEventListener('transitionend', deleteTransition))

var keys = document.querySelectorAll('.key');
keys.forEach(function(key) {
  return key.addEventListener('transitionend', deleteTransition)
})


window.addEventListener('keydown', playSound)
