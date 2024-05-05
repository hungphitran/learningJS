function run() {
	var person  = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	var tmp= Object.keys(person);
	for (key of tmp) console.log(key);
}

run();