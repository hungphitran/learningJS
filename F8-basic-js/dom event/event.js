document.onkeyup= function(event){
    switch(event.which){
        case 27:
            console.log('esc');
            break;
        case 40:
            console.log('key down');
            break;
        default:
            break;
    }
    
}

var buts=document.querySelectorAll('.button')
var inputVal;
var check;
for(let but of buts){
    but.onclick=function(event){
        console.log(event.target.innerText);
    }
}

var entry=document.querySelector('input[type="text"]')
console.log(entry);
entry.oninput= function(event){
    inputVal=event.target.value;
    console.log(inputVal);
}

// entry.onkeydown= function(event){
//     inputVal=event.target.value;
//     console.log(inputVal);
// }

var tickBox=document.querySelector('input[type="checkbox"]')
console.log(tickBox)
tickBox.onchange=function(event){
    check=event.target.checked
    console.log(check)
}

var menuBox=document.querySelector('select');
var menuVal;
menuBox.onchange= function(event){
    menuVal=event.target.value;
    console.log(menuVal)
}
