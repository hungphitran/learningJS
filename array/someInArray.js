function checkEven(num)
{
    return !(num%2);
}
function run(data) {
	var res= data.some(checkEven);
	if (res) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}

run([1,2,3,4,5,6]);