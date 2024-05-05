function  uc_first(word) {
	var fst_letter=word.charAt(0)
    var tmp=word.slice(1)
    fst_letter=fst_letter.toUpperCase()
    return fst_letter.concat(tmp)
}
function run(str) {
    var tmp=str.split(" ")
    var res=""
    for (word of tmp)
        {
            res+=uc_first(word)+" "
        }

    console.log(res)
}

run("the quick brown fox")