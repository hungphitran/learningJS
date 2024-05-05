function run(data) {
	data.forEach(function(element) {
		if (element%5==0) console.log(element);
	});
}

run([1,2,3,4,5,6,7,8]);