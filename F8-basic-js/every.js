var names=[
    'hung',
    'nam',
    'thanh',
    'an',
    'tien'
];

Array.prototype.every2=function(callback){
    for(var key in this){
        if(this.hasOwnProperty(key)&& !callback(this[key],key,this)){
            return false;
        }
    }
    return true;
}

console.log(names.every2(function(val,index){
    return val.includes('a');
}))