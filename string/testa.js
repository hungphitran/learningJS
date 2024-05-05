function ucfirst(str) {
	var first_letter  = str.charAt(0)
	var rest  = str.slice(1)
	
	first_letter=first_letter.toUpperCase()
	rest=first_letter.concat(rest)
	console.log(rest)
}

ucfirst("this is a Test")