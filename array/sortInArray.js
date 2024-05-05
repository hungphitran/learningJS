function cmp(a,b)
{  
    return a-b;
}
function run(data) {
	data= data.sort(cmp)
	console.log(data)
}

run([4,1,5,2,6,3])