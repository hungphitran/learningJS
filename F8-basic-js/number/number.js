// var a=2;
// var b=4;
// var d='ada';
// console.log(typeof(d)!=Number);
// var c=33/'fd';
// console.log(c);
// console.log(isNaN(c));
// console.log(Number.isFinite(a));
// console.log(Number.isInteger(1/3));
// console.log(Number.parseFloat(1/3));
// console.log(Number.parseInt(1/3));
// console.log((1/3).toFixed(5))
// console.log((1/3).toString());


function isNumber(value){
    return  (!isNaN(value))&&typeof(value)==typeof(1);
}


// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false