function IsPos(num)
{
    return num>0;
}
function run (data) {
	var resVal= data.find(IsPos);
	var resInd=data.findIndex(IsPos);
	if( resInd==-1 ) console.log("No result");
    else console.log(resInd+" "+resVal);
}

run([1,2,3]);