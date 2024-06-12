var postApi="https://jsonplaceholder.typicode.com/comments";

fetch(postApi)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var htmls=data.map(function(user){
            return `
            <h2>${user.id}</h2>
            <p>${user.name}</p>`
        })
        document.getElementById('userlist').innerHTML=htmls.join();
    })
    .catch(function(error){
        alert('ERROR')
    })