var btn= document.getElementById('btn');
console.log(btn);
// setTimeout(function(){
//     btn.onclick= function(){
//         console.log('first')
//         console.log('second')
//         console.log('third')
//     }
//     }
// ,3000);
function first(){
    console.log(Math.random());
}
btn.addEventListener('click',first);

btn.removeEventListener('click',first);

setTimeout( function first(){
        onsole.log()
    },);  