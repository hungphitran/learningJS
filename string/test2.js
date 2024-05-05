function run(str) {
	var regex=/a/gi;
	str=str.replace(regex,"4")
    regex=/e/gi;
    str=str.replace(regex,"3")
    regex=/i/gi;
	str=str.replace(regex,"1")
    regex=/o/gi;
    str=str.replace(regex,"0")
    regex=/s/gi;
    str=str.replace(regex,"5")
	str=str.trim()
    console.log(str)
}

run("javascript is cool  ")