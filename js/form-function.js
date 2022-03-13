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


// function name () {
// 	return {};
// }
// console.log('');



// function myFunction(a, b) {
// 	return a + b;	
// };
// const sum1 = myFunction(12, 12);
// console.log(sum1);

// const sum1 = myFunction(20, 30);
// console.log(sum1);




// function myFunction(a, b) {
// 	return {
// 		a,
// 		b,
// 		sum: a + b,

// 	};
// };
// const sum1 = myFunction(2, 3);
// console.log(sum1);

// function  myFunction(){
//   let num1 = Number(document.getElementById("num1").value);
//   let num2 = Number(document.getElementById("num2").value);
//   let num3 = Number(document.getElementById("num3").value);
//   let result = num1 + num2 + num3;

//   document.getElementById("result").innerHTML = result;
//  };
// console.log(result);


// let formData = new FormData();
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');

// for(let [name, value] of formData) {
//   alert(`firstname = Gunko`); 
//   alert(`lastname = Karina`); 
// }


// let formData = new form(2, 3);
// formData.Number(document.getElementById("key1").value);
// formData.Number(document.getElementById("key2").value);
// for(let [key1, value] of formData) {
//   alert((`firstname = Gunko`));
// }


function getfullName(){
	event.preventDefault();

	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	console.log(firstName);
	console.log(lastName);
	document.getElementById("result").innerHTML = firstName + ' ' + lastName;

   
};
