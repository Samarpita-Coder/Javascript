// Object Oriented JS

let car={
    name: "Maruti 800",
    topSpeed: 90,
    run: function(){
        console.log("Car is running");
    }
}
console.log(car);
console.log(car.run());
//delete a key and value pair in object
delete car.name;
console.log(car);
// console.clear();

//constructor
function GeneralCar(givenName,topSpeed){ 
    this.name=givenName;
    this.topSpeed=topSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
}
let car1=new GeneralCar("Nissan",180);
let car2=new GeneralCar();

console.log(car1);
console.log(car2);
console.log(car2.run());