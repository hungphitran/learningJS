function run(year, month, day) {
	var d = new Date();
	
	d.setFullYear(year);
	d.setMonth(month);
	d.setDate(day);
	
	console.log("Year is " + d.getFullYear() );
	console.log("Month is " + (d.getMonth()) );
	console.log("Day is " + d.getDate() );
}

run(2019,6,24)