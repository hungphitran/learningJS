// //sync-async
// setTimeout(function() {
//     console.log('Dòng này sẽ in ra sau')
// }, 0)
// // setTimeout là tác vụ bất động bộ (async)

// console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

// //pain
// //callback hell-pyramid of doom
//  var p1= new Promise(
//     function(resolve){
//         setTimeout(function(){
//             return resolve('first');
//         },2000);
//     }
//  )

//  var p2=new Promise(
//     function(resolve){
//         setTimeout(function(){
//             return reject('err')
//         },1000)
//     }
//  )

//  Promise.all([p1,p2])
//     .then(function(s){
//         console.log(s[0]+s[1]);
//     })
//     .catch(function(s){
//         console.log(s);
//     });


var users=[
    {
        id: 1,
        name: 'admin',
    },
    {
        id:2,
        name:'user1',
    },
    {
        id:3,
        name:'user2',
    },
]

var comments=[
    {
        id:1,
        user_id:1,
        content:'abc'
        
    },
    {
        id:2,
        user_id:2,
        content:'cde'
    },
    {
        id:3,
        user_id:2,
        content:'hjjhbj'
    },
]

// fake API

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        },3000);
    })
}

function getUsersByIDs(users_id){
    return new Promise(function(resolve){
        var result=users.filter(function(user){
            return users_id.includes(user.id);
        })
        setTimeout(resolve(result),3000);
    })
}

getComments()
    .then( function(c){
        var users_id=c.map(function(comment){
            return comment.user_id;
        });

        return getUsersByIDs(users_id)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                }
            });
    })

    .then(function(data){
        var comments_block=document.getElementById('comments_block');
        var html=''
        data.comments.forEach(function(comment){
            var user=data.users.find(function(user){
                return user.id===comment.user_id;
            });
            html+=`<li>${user.name}: ${comment.content}</li>\n`
        })
        comments_block.innerHTML=html;
    });
