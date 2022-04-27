// Loops

for(let i=0; i<=100; i++){
    console.log(i);
}

let j = 0 ;
while(j<=100){
    if(j==99){
        j++;
        continue;
    }
    console.log(j);
    
    j++;
}

let k = 0;
do{
    if(k==5){
        break;
    };
    console.log(k);
    k++;
}while(k<10);

console.log('done');

// Iterate Array

let arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
arr.forEach(function(emt,index,array){
    console.log(emt,index,array);
});

// Iterate Objects

let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Programmer",
    OS: "Ubuntu"
};

for(let key in obj){
    console.log(`${key} of object is ${obj[key]}`);
};

