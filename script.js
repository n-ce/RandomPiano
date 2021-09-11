var count = 0;
var body = document.body;
body.onclick = function() {count++;}
body.onload=function(){
  setInterval(function(){
    if (count % 2 == 1) {
      body.style.backgroundImage = "url(Pause.webp)";
      sound = new Audio("Chords/"+Math.trunc(Math.random()*26)+".mp3");
      sound.play();
    }else{
      body.style.backgroundImage = "url(Play.webp)";
      sound.pause();
    }
  },1000)
}