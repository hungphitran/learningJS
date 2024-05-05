function abs(num)
{
    if (num<0) return -num
    else return num
}
function run(data) {
	var res= data.map(abs)
    console.log(res)
}

run([2,-1,-8])