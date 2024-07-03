const disc=document.querySelector('.disc')
const play_but=document.querySelector('.ti-control-play');
const progress_bar=document.querySelector('.bar');


// setting for progress bar
setInterval(function(){
    if(Number.parseInt(progress_bar.value)>=Number.parseInt(progress_bar.max)) progress_bar.value=0;
    else if(play_but.className=='ti-control-pause') progress_bar.value=Number.parseInt(progress_bar.value)+1;
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


const app={
    songs:[
        {
            "name":"1000 anh mat",
            "singer":"shiki"
        },
        {
            "name":"no way back",
            "singer":"bwine & lewuyne"
        }
    ],
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