// const x = function (a, b) {return a * b};
// document.getElementById("demo").innerHTML = x(4, 3); //1

// const  winter = function (f, g) {
// 	return (f + g);
// };
// document.getElementById("demo").innerHTML = winter(10, 33); //2

// function myFunction(a, b) {
//   return a * b;
// }
// console.log(myFunction); //3

// var x = function(x, y) {
//   return x * y;
// }
// document.getElementById("demo").innerHTML = x(12, 56); //4

// const x = (x, y) => x * y;
//  document.getElementById("demo").innerHTML = x(10, 1000); //5

// function myFunction(a, b) {
// 	return a * b;
// }
// let x = myFunction(4, 5) % 6;
// document.getElementById("demo").innerHTML = x; //6

// function myFunction(a, b) {
// 	return arguments.length;
// }
// document.getElementById("demo").innerHTML = myFunction(12, 3); //7

// function string(karina, blue) {
// 	name: 'karina' ;
// }
// console.log('karina');


// function getFullName(firstName, lastName) {
// 	return firstName + ' ' + lastName;
// }

// const name1 = getFullName('karina', 'Gunko');

// console.log('name1', name1);

// const name2 = getFullName('Vika', 'Petrova');

// console.log('name2', name2);

// const name3 = getFullName('Vasya', 'Ivanov');

// console.log('name3', name3);



// виклик функциї

// function myFunction(a, b) {
//   return a * b;
// }
// myFunction(10, 2);    
// document.getElementById("demo").innerHTML = myFunction(10, 2); 


// function myFunction(a, b) {
//   return a * b;
// }
// window.myFunction(10, 2);
// document.getElementById("demo").innerHTML = window.myFunction(10, 2); 



// let name = myFunction();
// function myFunction() {
//   return this;
// }
// document.getElementById("demo").innerHTML = name; 


// const myObject = {
//   firstName:"Karina",
//   lastName: "Gunko",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// document.getElementById("demo").innerHTML = myObject.fullName(); 


// const myObject = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function() {
//     return this;
//   }
// }
// document.getElementById("demo").innerHTML = myObject.fullName();


// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName  = arg2;
// }

// const myObj = new myFunction("Ivan","Ivanov")
// document.getElementById("demo").innerHTML = myObj.firstName; 


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(this);


// function myFunction() {
//   return this;
// };


// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }
// let one = person1.fullName.call(person2); 

// console.log(one);