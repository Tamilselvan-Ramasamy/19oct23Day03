let obj1 ={name:"Person2",age:5};
let obj2 ={age:5,name:"person1"};

//Object.value(obj1).toString() === Object.value(obj2).toString();
//console.log( _.isEqual(obj1, obj2) );
let flag;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            flag = true
        }
        else {
            flag=false;
           
        }
    }
}
else {
    flag=false;
}
console.log(flag);