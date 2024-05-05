function run(data) {
    var res= data.includes(5);
	if(res) console.log("Yes");
    else console.log("No");
}

run([1,2,3,4,5,6,7])