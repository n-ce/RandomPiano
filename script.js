

document.body.onclick=function() {
  setInterval(function() {
    document.querySelectorAll('audio')[Math.trunc(Math.random() * 26)].play();
  }, 2000)
}