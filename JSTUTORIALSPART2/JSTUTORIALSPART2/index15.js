//ES6 Classes
class Employee{
    constructor(name,exp,div){
        this.name=name;
        this.exp=exp;
        this.div=div;
    }
    slogan(){
        return `${this.name}`;
    }
    joiningYear(){
        return 2020-this.exp;
    }
    static add(a,b){
        return a+b;
    }
}

harry=new Employee();
console.log(harry);
harry=new Employee("Harry",10,"Division");
console.log(harry.slogan());
console.log(harry.joiningYear());
console.log(Employee.add(3,5));

//Inheritance
class Programmer extends Employee{
    constructor(name,exp,div,lang){
        super(name,exp,div);
        this.lang=lang;
    }
}

let p=new Programmer();
console.log(p);
console.log(p.joiningYear());
console.log(Programmer.add(2,3));