// let userName = 'Вася';
// function showMessage() {
//   userName = "Петя"; 
//   let message = 'Привет, ' + userName;
//   alert(message);
// }
// alert( userName );
// showMessage();
// alert( userName ); 


// function showMessage() {
//   alert( 'Всем привет!' );
// }
// showMessage();
// showMessage();


// function sum(a, b) {
//   return a + b;
// }
// let result = sum(1, 2);
// alert( result ); 


// function checkAge(age) {
//   if (age > 19) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }

// let age = prompt('Сколько вам лет?', 19);

// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }

// 2

// let i = 0; 
// while (i < 3) {
// 	alert( i );
// 	i++;
// }

// let i = 3; 
// while (i) {
// 	alert( i );
// 	i--;
// }

// let i = 3;
// while (i) alert(i--)

// document.getElementsByClassName('div2')

// let getName = function() {
// 	return "name1";
// }

// let result = getName();

// // console.log('result', result)

// const user = {
// 	name: "Karina",
// 	getName: function () {
// 		console.log('this1', this);
// 		return this.name;
// 	}
// };

// console.log('user', user);
// console.log('userName', user.getName());


// const getSum = (chislo1, chislo2) => {
// 	return chislo1 + chislo2;
// } 

// let sum = getSum(4, 5);

// console.log('sum', sum);

// const divElement = document.querySelector('div')

// {}
// {
// 	name: 2, 
// 	name1: 'showMessage',

// }

// []
// [1, 2, 3, 4]
// ['1', '3', 'string', 'string2']

// [{name: "karina"}, {}]

// function() {

// }

// () => {};

// if() {

// } else {

// }

// Масиви

// let arr = ["I", "learning", "JavaScript"];
// arr.splice(1, 1); 
// alert( arr ); 

// let weather = ["storm", "tornado", "typhoon"];
// alert( weather.length ); 

// let fruits = ["apple",];
// alert( fruits ); 

// let fruits = [
//   "Яблоко",
//   "Апельсин",
//   "Слива",
// ];

// let bird = ["duck", "chicken"];
// bird.push("duck");
// alert( bird );

// let fruits = ["orange", "pear"];
// fruits.unshift('Яблоко');
// alert( fruits );

// let arr = ["apple", "orange", "pear"];

// for (let key in arr) {
//   alert( arr[key] )
// }


// let fruits = ["apple", "orange", "pear"];
// alert( fruits.pop() );
// alert( fruits );

// let furniture = ["closet", "sofa"];
// alert ( furniture [1] );

// let fruits = ["apple"];

//// Методи масивів.

// fruits.push("orange", "pearа");
// fruits.unshift("pineapple",);

// ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
// alert( fruits );
// indexOf
// const  a  =  [3, -9, -8, -7, -5, -7, -5, -2];
// const  b  =  ['Hi',  'hello'];
// console.log.table(a);
// console.log(a.indexOf(-2));

// if + (a.indexOf('7') + !==+-1) + {
// 	console.log('yes');
// }
// else {
// 	console.log('no');
// }

// const array1 = [1, 3, 4, 3, 7, 2, 5, 6, 7, 8, 9, 10];
// const array2 = array1.filter((item) => {
// 	return item > 5;
// });
// const array3 = array1.map((item) => {
// 	const newObj = {
// 		age: item
// 	};

// 	return newObj;
// });
// const array4 = array3.some((item) => {
// 	return item > 100;

// });
// const array5 = [1, 2, 3, 4, 5];
// array5.reverse();

// const arraySome = array1.some((item) => {
// 	return item > 100;
// });

// console.log('arraySome', arraySome);

// const arrayEvery = array1.every((item) => {
// 	return item > 100;
// });

// console.log('arrayEvery', arrayEvery);

// console.log('array1', array1);
// console.log('array2', array2);
// console.log('array3', array3);
// console.log('array4', array4);
// console.log('array5', array5);

// const a = [1, 2, 3, 4, 5].reduce(item,0);
// function item(item, a) {
// 	return item + a;
// }

// console.log(a);


// const item = [1, 2, 3, 4, 5].reduce((item, a) => {
// 	return item + a;
// }) 
// console.log(item); // сума в сіх чисел.


// split

// const str = '';
// const a = str.split('');

// console.log(a);
// const b = ['h', 'e', 'l','l', 'o']

// // join 

// const c = b.join('');

// console.log(c);
// console.log(b);

// concat

// const a1 = [21, 22, 23, 24];
// const a2 = [31, 32, 33, 34];
// const a3 = [48, 49, 50,];
// a3[22] = 100;
// const a4 = [];
// const b = a1.concat(a2,a3,a4);
// console.log(b);
// console.log('b');

// concat -> string 

// const c = 'helo';
// const d = 'hi';
// const f = c.concat(d);
// console.log(f); 

// splice 

// let k = [33, 44, 55, 66, 77, 88];
// k.splice(2, 2, 'hi', 'dd', 'tt', 'rr' );
// console.log(k);


/// spread

// const a = [3, 4, 5];
// const b = ['c', 'd', 'e'];

// const c = [...a, ...b];
// console.log(c);

// clone
 
// const d = [...b];
// console.log(d);

//string -> array

// const e = [...'hello'];
// console.log(e);

//set -> array

// const f = [...new Set([1, 1, 2, 3, 4, 2])];
// console.log(f);

// function test(){
// 	console.log([...arguments]);
// }

// test(3, 4, 5, 6, 7);

//// формат json

// const title = {
// 	name: "Karina",
// 	age: 19,

// 	tostring() {
// 		return `{{name: "${this.name}", age: ${this.age}}`;
// 	}
// };
// console.log(user);