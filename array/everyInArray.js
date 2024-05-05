function check(num)
{
    if(num%2==0) return true;
    else  return false;
}

function run(data) {
	var res = data.every(check);
	if (res) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}

run([2,4,6,8])