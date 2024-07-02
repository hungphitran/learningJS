// CRUD create-read-update-delete

var coursesApi='http://127.0.0.1:5500/postman/db.json';

function start(){
    getCourses(renderCourses);
    handleAddRequest();
}

start();


function getCourses(callback){
    fetch(coursesApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function createCourse(new_data,callback){
    var options={
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(new_data)
    }
    
    fetch(coursesApi,options)
        .then( function(response){
            console.log(response)
            response.json();
        })
        .then(callback)
        .catch(function(error){
            console.log(error);
        })
}


function renderCourses(courses){
    var courses_block=document.querySelector('.courses-block');
    var htmls=courses.map(function(course){
        return `<li> 
            <h3> id: ${course.id}</h3>
            <p>name: ${course.name}</p>
            </li>`;
    });
    courses_block.innerHTML=htmls.join('');

}


function handleAddRequest(){
    var addBtn=document.querySelector('button');

    addBtn.onclick = function(){
        var name=document.querySelector('input[name="name"]').value;
        var id=Number.parseInt(document.querySelector('input[name="id"]').value);
        
        var new_data={id:id,name:name};
        createCourse(new_data,function(){
            getCourses(renderCourses);
        });
    }

}

