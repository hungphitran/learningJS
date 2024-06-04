function person(name,age){
    this.name=name;
    this.age=age;
    this.getName=function(){
        return this.name;
    }
}

var p1=new person('a',10);

person.prototype.addr='vietnam';

var p2=new person('b',10);

console.log(p1);
console.log(p2);