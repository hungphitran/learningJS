function checkPositive(num)
{
    return num>0;
}
function run(data) {
	var res = data.filter(checkPositive);
	console.log(res);
}

run([1,2,3,-1]);