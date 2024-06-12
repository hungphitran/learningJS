var cmAPi='http://localhost:3000/comments'

fetch(cmAPi)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(var ob of data){
            console.log(ob);
        }
    })
    .catch(function(error){
        console.log(error,'cannot get data')
    })