// Prototype Inheritance

const proto={
    slogan: function(){
        return 'This company is the best';
    },
    changeName: function(name){
        this.name=name;
    }
}

const harry=Object.create(proto);
console.log(harry);
harry.name="Harry";
harry.role="Programmer";
console.log(harry);
harry.changeName("Harry2");
console.log(harry);