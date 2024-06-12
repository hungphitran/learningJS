Array.prototype.myFilter = function(cb) {
    var res=[];
    for(var key in this){
        if(typeof this[key]!=='function'&& cb(this[key],key,this)){
            res.push(this[key]);
        }
    }
    return res;
}



//Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); //Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
}));// Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
}));// Output: [1, 2, 3, 4]


