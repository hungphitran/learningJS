var names=[
    'hung',
    'nam',
    'thanh',
    'an',
    'tien'
];

names.forEach(function(val,index,names){
    console.log(val);
});

Array.prototype.forEach2=function(callback){
    if(typeof callback==='function'){

    for(var key in this){
        if(typeof this[key]!=='function'&&!this.hasOwnProperty())callback(this[key]);
    }
}
}
var arr=new Array(10);
arr.forEach2(callback);
console.log(arr);

function callback(val,index,array){
    console.log(val);
};

names.forEach2(callback);