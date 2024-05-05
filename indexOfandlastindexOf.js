function run(data){
	var inof= data.indexOf(2)
	var lastinof= data.lastIndexOf(2)
	if(inof==-1) console.log("No result")
    else console.log(inof+" "+lastinof)
}

run([-1,2,3,4,2,6])