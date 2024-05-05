
function run(name) {
    String.prototype.is_big=function (){ return this.length>10};
	console.log(name.is_big());
}

run("JS");