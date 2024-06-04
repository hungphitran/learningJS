var arr=['a','b','c','a','b','c'];

var a=[];
for(var c of arr){
	if(a.indexOf(c)!==-1) continue;
	else a.push(c)
}
console.log(a);

var b=new Set(arr)
console.log([...b]);