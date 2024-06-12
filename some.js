var names=[
    'hung',
    'nam',
    'thanh',
    'an',
    'tien'
];

Array.prototype.some2=function(callback){ 
    for(var key in this){
        if(this.hasOwnProperty(key)&&callback(this[key],key,this)) return true;
    }
    return false;
}

var res=names.some2(function(val,ind){
    return val.includes('a');
})

console.log(res)