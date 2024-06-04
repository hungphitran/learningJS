var courses=[
    {
        id:1,
        name:'java',
        coin:10
    },
    {
        id:2,
        name:'python',
        coin:20
    },
    {
        id:3,
        name:"js",
        coin:30
    },
    {
        id:4,
        name:'c++',
        coin:5
    },
    {
        id:5,
        name:'c',
        coin:4
    }
];

var totalCoin=courses.reduce(function(sum,course,index){
    return sum+course.coin;
},0);
console.log(totalCoin);
