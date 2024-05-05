function run() {
	var person  = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	var tmp= Object.values(person);
	for (val of tmp) console.log(val);
}

run();