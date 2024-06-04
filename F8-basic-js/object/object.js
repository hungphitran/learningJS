var country='country';
var admin={
    name:'hung',
    age:20,
    [country]:'vietnam',
    getName:function(){
        return this.name;
    },

};

console.log(admin);

admin.mail='hungtran.com';
admin['job']='student';
console.log(admin);

console.log(admin.job);

delete admin.age;
console.log(admin);
console.log(admin.getName());



//constructor
function person(name,age){
    this.name=name;
    this.age=age;
    getName=function(){
        return this.name;
    }
}

var p1=new person('hung',20);
console.log(p1);