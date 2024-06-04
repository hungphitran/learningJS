function showDialog(){
    console.log("hello world");
}
showDialog();


function wr(){
    for(var p of arguments){
        console.log(p);
    }
}
wr('asdasd','asdasda','asdasdasd','adasdasd');

// var isConfirm=confirm("oke?");
// console.log(isConfirm);

function sum(a,b){
    return a+b;
}

function makeArr(a,b){
    return [a,b];
}

console.log(makeArr(10,20));
// no return(void function) = undefined

console.log(sum(10,20));

function first(){
    console.log('1');
}
function first(){
    console.log(2);
}

first();//output :2

function a(){
    function b(){
        console.log('private');
    }
    b();
}

a();


//types of function

//decleration :
function dec(){

}
//expression :

var ex=function(){
}


