var video = document.getElementById("myVideo");
var btnPlay = document.getElementById("myPlay");
var myAtt = document.getElementById("myAttribute");
var inc =1;
function myPlay() {
  if (video.paused) {
    video.play();
    btnPlay.innerHTML = "Pause";
    myAtt.innerHTML = 'video.play();';
  } else {
    video.pause();
    btnPlay.innerHTML = "Play";
    myAtt.innerHTML = 'video.pause();';
  }
}

var btnInc = document.getElementById("myInc");
function myInc() {
    if(inc < 16){
        btnDec.disabled = false;
        video.playbackRate = inc;
        inc = inc + 1;
        myAtt.innerHTML = 'video.playbackRate = '+inc;
    }
}

var btnDec = document.getElementById("myDec");
function myDec() {
    if(inc > 1){
        inc = inc - 1;
        video.playbackRate = inc;
        myAtt.innerHTML = 'video.playbackRate = '+inc;
    }
    else {
          btnDec.disabled = true;
   }
}

var btnMute = document.getElementById("myMute");
function mySound() {
  if (!video.muted) {
    video.muted = true;
    btnMute.innerHTML = "Unmute";
    myAtt.innerHTML = 'video.muted = true;';

  } else {
    video.muted = false;
    btnMute.innerHTML = "Mute";
    myAtt.innerHTML = 'video.muted = false;';
  }
}
