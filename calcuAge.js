function run(name, year_of_birth) {
	var d = new Date();
	var current_year = d.getFullYear();
	// define a object 
	var person={
        name: name,
        year_of_birth: year_of_birth,
        address:"Ha Noi"
    };

	// Calculate age
	var age= current_year-person.year_of_birth;
	
	console.log(person); // print object
	console.log(person.name + " is " + age + " years old");
}

run("phong",2018);