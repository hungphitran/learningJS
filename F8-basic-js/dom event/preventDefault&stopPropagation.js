var aElements=document.querySelectorAll('a');

console.log(aElements);

for(let a of aElements){
    aElements.onclick= function(ev){
        if(!ev.target.href.startsWith("https://stackoverflow.com/")){
            ev.prevenDefault();
        }
    }
}