const disc=document.querySelector('.disc')
const play_but=document.querySelector('.ti-control-play');
const progress_bar=document.querySelector('.bar');


progress_bar.max=360;


// setting for progress bar
setInterval(function(){
    if(play_but.className=='ti-control-pause') progress_bar.value++;
    if(progress_bar.value>=progress_bar.max) progress_bar.value=0;
},1000)

// option for play and pause
play_but.onclick=function(){
    let tmp=play_but.className;
    if(tmp=='ti-control-play'){
        play_but.className='ti-control-pause';
    }
    else{
        play_but.className='ti-control-play';
    }
}


//making disc turn around
var cnt=0.0;
setInterval(function(){
    let tmp=play_but.className;
    if(tmp=='ti-control-play'){
        return;
    }
    cnt+=0.2;
    if(cnt>=360.2) {
        cnt=0.0;
    }
    disc.style.transform = `rotate(${cnt}deg)`;

},10)