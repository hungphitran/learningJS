var languages=['eng',
    'chi',
    'vie',
];

console.log(languages);

var l=new Array('eádng',
'chidsas',
'vietan',
null,
undefined,);

console.log(l);

console.log(typeof(languages));//object
console.log(Array.isArray(languages));//true
console.log(languages.toString());
console.log(languages.join("-"));
console.log(languages.pop());//vie
console.log(languages);//chi,eng
console.log(languages.push('vie','ame'));//3
console.log(languages.shift());//!=pop
console.log(languages);
console.log(languages.unshift('sdsd','ádas'));
console.log(languages);
languages.splice(1,2,'gvj')
console.log(languages);

var a=languages.concat(l);
console.log(a);
console.log(a.slice(3,6));

var person=[
    p1={
        id:1,name:'adas'
    },
    p2={
        id:2,name:'iid'
    },
    p3={
        id:3,name:'knvkd'
    }
]



person.forEach(function(val,index){
    console.log(val,index);
});

person.every(function(val,index){
    console.log(val,index)
    return val.id-1==index;
})

person.some(function(val,index){
    console.log(val,index);
    return val.id-1!=index;
})

person.find(function(val,index){
    console.log(index)
    return val.id==3;
})

var lst=person.filter(function(val,index){
    return index==2;
})
console.log(lst);

var a=person.map(function(val,id){
    val.id+=10;
    return `<h1>${val.name}</h1>`;
});
for (var h of a) console.log(h);


var b=person.reduce(function(sum,val,index)
{
    return sum+val.id;
},0);
console.log(b);