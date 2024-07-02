class course{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    getName=function(){
        return this.name;
    }
}

const a= new course('toan',100);
console.log(a);