var count = 0;
var body = document.body;
body.onclick = function() {count++;}

setTimeout(timer,500);
function command(x){
  if(count % 2 == 1){
    body.style.backgroundImage = "url(Pause.webp)";
    body.style.backgroundColor = "#059C6A";
    sound = new Audio("Chords/" + Math.trunc(Math.random() * 88) + ".mp3");
    sound.play();
  }
  else {
    body.style.backgroundImage = "url(Play.webp)";
    body.style.backgroundColor = "#00D08C";
    sound.pause();
  }
  setTimeout(x,Math.trunc(Math.random()*1000));
}
function timer(){command(timer2);}
function timer2(){command(timer);}