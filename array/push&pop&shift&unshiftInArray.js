function run(data) {
    //shift eliminate first element and return it
	var a=data.shift()
	// pop: eliminate last element and return it
    var b=data.pop()
    //unshift:add a new element at top of array
    //var d=data.unshift()
    //push: add a new element at the end of array
	var c=data.push('X')
	console.log(data)
}

run(["ab","bc","cd"])