const disc=document.querySelector('.disc')
const play_but=document.querySelector('.ti-control-play');
const stop_but=document.querySelector('.ti-control-stop');
const progress_bar=document.querySelector('.bar');
const audio=document.querySelector(".audio");
const description=document.querySelector(".description");
const backward_but=document.querySelector(".ti-control-skip-backward");
const forward_but=document.querySelector(".ti-control-skip-forward");
const reload_but=document.querySelector(".ti-reload");
const playlist=document.querySelector(".playlist");
console.log(playlist);
playlist.innerHTML=`
    <h1>Playlist</h1>
    <div>
        <h1>Song 1</h1>
        <p>Singer 1</p>
    </div>
    <div>
        <h1>Song 2</h1>
        <p>Singer 2</p>
    </div>
    <div>
        <h1>Song 3</h1>
        <p>Singer 3</p>
    </div>
`
var songs=[];
var cur_index=0;


reload_but.onclick=function(){
    if(reload_but.className=='ti-reload'){
        reload_but.className='ti-reload active';
    }
    else{
        reload_but.className='ti-reload';
    }
}


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
    progress_bar.max=audio.duration;
    //handle when progress bar reach the end
    if(Number.parseInt(progress_bar.value)>=Number.parseInt(progress_bar.max)) {
        progress_bar.value=0;
        if(reload_but.className=='ti-reload') cur_index++;
        if(cur_index>=songs.length) cur_index=0;
        audio.src=songs[cur_index].path;
        description.innerHTML=`
            <h1>${songs[cur_index].name}</h1>
            <p>${songs[cur_index].singer}</p>
        `;
        audio.load();
        if(play_but.className=='ti-control-pause'){
            audio.play();
        }
        else {
            audio.pause();
        }
    }

    if(play_but.className=='ti-control-pause') progress_bar.value=`${Number.parseInt(progress_bar.value)+1}`;
    else progress_bar.value=`${Number.parseInt(progress_bar.value)}`;
},1000)

// option for play and pause
play_but.onclick=function(){
    progress_bar.max=audio.duration;
    let tmp=play_but.className;
    if(tmp=='ti-control-play'){
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
    progress_bar.max=audio.duration;

    if(play_but.className=='ti-control-pause'){
        audio.play();
    }
}

forward_but.onclick=function(){
    cur_index++;
    progress_bar.value='0';
    if(cur_index>=songs.length) cur_index=0;
    audio.src=songs[cur_index].path;
    description.innerHTML=`
        <h1>${songs[cur_index].name}</h1>
        <p>${songs[cur_index].singer}</p>
    `
    audio.load();
    progress_bar.max=audio.duration;

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

