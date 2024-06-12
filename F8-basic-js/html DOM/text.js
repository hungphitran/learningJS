var h=document.getElementById('head1');
console.log(h.innerText)
console.log(h.textContent)

h.innerText='newheading';


var boxElement=document.querySelector('.box');
// console.log(boxElement.innerHTML()); 
// boxElement.innerHTML='<h1 title="header">heading</h1>'
// console.log(boxElement.querySelector('h1').innerText)

console.log(typeof[boxElement.outerHTML]);
// boxElement.outerHTML='<span>test</span>'

