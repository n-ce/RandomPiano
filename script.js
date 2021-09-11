var count = 0;
var body = document.body;
body.onclick = function() {count++;}
body.onload=function(){
  setInterval(function(){
    if (count % 2 == 1) {
      body.style.backgroundImage = "url(Pause.webp)";
      body.style.backgroundColor = "#059C6A";
      sound = new Audio("Chords/"+Math.trunc(Math.random()*87)+".mp3");
      sound.play();
    }else{
      body.style.backgroundImage = "url(Play.webp)";
      body.style.backgroundColor = "#00D08C";
      sound.pause();
    }
  },1000)
}