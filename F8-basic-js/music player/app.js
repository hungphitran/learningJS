const disc=document.querySelector('.disc')
const play_but=document.querySelector('.ti-control-play');
const stop_but=document.querySelector('.ti-control-stop');
const progress_bar=document.querySelector('.bar');
const audio=document.querySelector(".audio");
const description=document.querySelector(".description");
const backward_but=document.querySelector(".ti-control-skip-backward");
const forward_but=document.querySelector(".ti-control-skip-forward");
var songs=[];
var cur_index=0;



console.log(progress_bar)
fetch("./songs/songs.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        songs.push(...data);
        audio.src=songs[cur_index].path;
        description.innerHTML=`
            <h1>${songs[cur_index].name}</h1>
            <p>${songs[cur_index].singer}</p>
        `
        audio.load();
    })

// setting for progress bar
setInterval(function(){
    if(Number.parseInt(progress_bar.value)>=Number.parseInt(progress_bar.max)) progress_bar.value=0;
    else if(play_but.className=='ti-control-pause') progress_bar.value=Number.parseInt(progress_bar.value)+1;
},1000)

// option for play and pause
play_but.onclick=function(){
    let tmp=play_but.className;
    if(tmp=='ti-control-play'){
        progress_bar.max=audio.duration;
        audio.play();
        play_but.className='ti-control-pause';
    }
    else{
        audio.pause();
        play_but.className='ti-control-play';
    }
}

backward_but.onclick=function(){
    cur_index--;
    progress_bar.value=0;
    if(cur_index<0) cur_index=songs.length-1;
    audio.src=songs[cur_index].path;
    description.innerHTML=`
        <h1>${songs[cur_index].name}</h1>
        <p>${songs[cur_index].singer}</p>
    `
    audio.load();
    if(play_but.className=='ti-control-pause'){
        audio.play();
    }
}

forward_but.onclick=function(){
    cur_index++;
    progress_bar.value=0;
    if(cur_index>=songs.length) cur_index=0;
    audio.src=songs[cur_index].path;
    description.innerHTML=`
        <h1>${songs[cur_index].name}</h1>
        <p>${songs[cur_index].singer}</p>
    `
    audio.load();
    if(play_but.className=='ti-control-pause'){
        audio.play();
    }
}

//set for stop button
stop_but.onclick=function(){
    audio.pause();
    audio.currentTime=0;
    play_but.className='ti-control-play';
    progress_bar.value=0;
}

//

progress_bar.onchange=function(){
    audio.currentTime=progress_bar.value;
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


const app={
    songs: [...songs],
    render: function(){
        var htmls=this.songs.map(function(song){
            return `<div>
                <h1>${song.name}</h1>
                <p>
                    ${song.singer}
                </p>
            </div>`
        })
        document.querySelector('.playlist').innerHTML=htmls.join('');
    },
    start: function(){
        this.render();
    }
}
app.start();

