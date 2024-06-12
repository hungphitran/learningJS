var divEle=document.querySelector('.box')
// console.log(divEle.style)
// divEle.style.backgroundColor='#f00';

// var pEle=document.querySelector('p')
// console.log(pEle.style)
// pEle.style.color='#f05123'

console.log(divEle.classList)

divEle.classList.remove('box1')
console.log(divEle.classList.value)
divEle.classList.add('red')
console.log(divEle.classList);

console.log(divEle.classList.contains('red'))

setInterval(()=>{
    divEle.classList.toggle('red');
},500);