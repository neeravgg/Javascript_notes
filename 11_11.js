//! call, apply & bind :----> 
//! Problem :?

//? 1... call :-
const obj1 = {
    names:'Tushar',
    age:24,
    address:'GuruGram',
    details: function(){
        console.log(`My f-name is ${this.callnames}. He is only ${this.age} years old. He is living in ${this.address}.`);
    }
}
obj1.details();

const obj2 = {
    names:'Ajit',
    age:25,
    address:'Delhi'
}
obj1.details.call(obj2);

//? 2...
let details = function(){
    console.log(`My f-name is ${this.names}. He is only ${this.age} years old. He is living in ${this.address}.`);
}

const obj1 = {
    names:'Tushar',
    age:24,
    address:'GuruGram'
}
details.call(obj1);

const obj2 = {
    names:'Ajit',
    age:25,
    address:'Delhi'
}
details.call(obj2);

//? 3...
let details = function(a,b){
    console.log(`My f-name is ${this.names}. He is only ${this.age} years old. He is living in ${this.address}.`);     
    console.log(`${a}, ${b}`)   
}

const obj1 = {
    names:'Tushar',
    age:24,
    address:'GuruGram'
}
details.call(obj1, 'Hello Sir', 'Kaise ho ?');

const obj2 = {
    names:'Ajit',
    age:25,
    address:'Delhi'
}
details.call(obj2);

//? 4... apply :-
let details = function(a,b){
    console.log(`My f-name is ${this.names}. He is only ${this.age} years old. He is living in ${this.address}.`);
    console.log(`${a}, ${b}`);
}

const obj1 = {
    names:'Tushar',
    age:24,
    address:'GuruGram'
}
details.apply(obj1,['Hello Sir', 'kaise ho ?']);

const obj2 = {
    names:'Ajit',
    age:25,
    address:'Delhi'
}
details.apply(obj2,['Akansha', 'Saxena']);

//? 5... bind :-
let details = function(a,b){
    console.log(`My f-name is ${this.names}. He is only ${this.age} years old. He is living in ${this.address}.`);
    console.log(`${a}, ${b}`);
}

const obj1 = {
    names:'Tushar',
    age:24,
    address:'GuruGram'
}
let std1 = details.bind(obj1,'Hello Sir', 'kaise ho ?');
std1();

const obj2 = {
    names:'Ajit',
    age:25,
    address:'Delhi'
}
// let std2 = details.bind(obj2,'Akansha', 'Saxena');
// std2();