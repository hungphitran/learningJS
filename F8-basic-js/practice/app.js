const tags=document.querySelectorAll('.tag')
const contents=document.querySelectorAll('.content')


tags.forEach((tab,index)=>{
    tab.onclick = function(){
        document.querySelector('.tag.active').classList.remove('active');
        document.querySelector('.content.active').classList.remove('active');
        this.classList.add('active');
        contents[index].classList.add('active');
    }
})

