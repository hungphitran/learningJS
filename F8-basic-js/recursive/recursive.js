function recur(i){
    if (i<0) return;
    else{
        console.log(i);
        recur(i-1);
    }
}

recur(5);
