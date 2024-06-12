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

function getMoney(sum,course,index){
    return sum+course.coin;
}

var totalCoin=courses.reduce(getMoney,0);
console.log(totalCoin);
 