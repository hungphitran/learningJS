/**
 * 0
 * false
 * ''
 * undifined
 * NaN
 * null
 */

if(null && undefined){
    console.log("true");
}
else{
    console.log('0');
}

var a=1;var b='1';

console.log(a==b);
console.log(a===b);

console.log(a!=b);
console.log(a!==b);

var x=2;

switch (x) {
    case 1:
        console.log(x);
        break;
    default:
        console.log(x);
        break;
}