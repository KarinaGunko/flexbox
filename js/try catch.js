// return
// f1(4, 5);
// let sum = 0;

// function f1(x, y) {
// 	sum = x + y           //1
// 	console.log(x + y);
// }

// function f1(x, y) {
// 	// const sum = x + y				//2
// 	// console.log(x + y); // Приймає 2 параметра і повертає їх return суму
// 	 return x + y; //sum 
// }

// f1(4, 5);
// f1(4, 45);



// // console.log(sum);

// function f2() {
// 	console.log(2);
// 	return 15;
// }
// console.log(5 + f2());
// console.log( f1(6,7) + f1(4,5));


// function randInt(min, max) {
// 	const rand = min + Math.random() * (max + 1 - min); //Вираховує случайне число
// 	return Math.floor(rand);
// }

// const r = randInt(222,333);
// console.log(r);
// console.log(randInt(222, 333)+ 100);

// // вивести куди завгодно
// console.log(f1(100,200));
// document.querySelector('.out-1').textContent = f1(300, 400);
// document.querySelector('.out-1').style.background = 'rgb(23,156,201)';
// document.querySelector('.out-1').style.background = 'rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})';

// // Використовувати у виразах

// const a = [2, 6, 3, 4, 5, 6, 1];
//  a.sort(function( a, b ) {return b - a});      
// console.log(a);

// callback
// const arr1 = [7, 4, 5, 6, 7];
// const out1 = document.querySelector('.out-1');
// const out2 = document.querySelector('.out-2');
// const out3 = document.querySelector('.out-3');

// function f1(arr, myFunc, block) {
// 	arr1[3] = arr1[3] * 2;
// 	out1.innerHTML = arr1;
// 	myFunc(arr, block);
// }

// function showArr(arr, block) {
// 	let out = '';
// 	 for (let i = 0; i < arr.length; i++) {
// 	 	  out += arr[i] + '_' + ',' + '  ';
// 	 }
// 	 block.innerHTML = out;
// }

// function showArr2(arr, block) {
// 	let out = '';
// 	 for (let i = 0; i < arr.length; i++) {
// 	 	  out += arr[i] + '*' + ',' + '  ' ;
// 	 }
// 	 block.innerHTML = out;
// }
// f1(arr1, showArr, out1);
// f1(arr1, showArr2, out2);

// // Приклад колбека

// function squad(item) {
// 	return item**2;
// }

// // const arr2 = arr1.map(squad)
// const arr2 = arr1.map(item => item**2)
// console.log(arr2);
// showArr(arr2, out3);

// // Приклад з input

// document.querySelector('.b-4').addEventListener('click', ()=>{
// 	getUserName(fixUserName);
// });
// function getUserName(fixFunc) {
// 	const userName = document.querySelector('.i-4').value;
// 	// const userName = prompt('Enteryour name: ');
// 	console.log(fixFunc(userName))
// }

// function fixUserName(str){
// 	return str.trim().toLowerCase();
// }

//асинхронні callback функції

// async function pageLoader(callback) {
//         const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         callback(data);
// 	callback(data);
// }

// function pageLoader(callback) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => callback(json));
// }

// function getAJAX(data) {
// 	console.log('Sent a question');
// 	console.log('Server response');
// 	console.log(data);
// }
// pageLoader(getAJAX);

//ад callback
// function pageLoaedr() {
// 	 fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => {
//         	console.log('Sent a question per page')
// 	        console.log('Server response: ')
// 	        console.log(json);
// 	        fetch('https://jsonplaceholder.typicode.com/todos/1' + json.userId)
// 	           .then(response => response.json())
// 	           .then(json => {
// 	           console.log('Sent a question  per page')
// 	           console.log('Server response')
// 	            console.log(json);
// 	       });

//         });

// }
// pageLoader();

// function pageLoader(url, callback) {
// 	fetch(url)
// 	    .then(response => response.json())
// 	    .then(json => callback(json))
// }

// function getAJAX(data) {
// 	console.log('Sent a question  per page')
// 	console.log('Server response')
// 	console.log(data);
// 	pageLoader('https://jsonplaceholder.typicode.com/users/' + data.userId, showUser);
// }

// function showUser(user) {
// 	console.log(user);
// }

// pageLoader('https://jsonplaceholder.typicode.com/todos/1', getAJAX);


// Function Expression VS Function declaration JavaScript. Особенности объявления функций

// f1();

// if (true) {
// 	function f1() {
// 		console.log('function 1 if');
// 	}
// }
// else {
// 	function f1() {
// 		console.log('function 1 else');
// 	}
// }



// let dim = [1, 2, 3, 4, 5];

// let result = dim.map(function(item) {
// 	console.log('item', item);
// 	return {
// 		num: item
// 	};
// });
// console.log('result', result);

// function callbackFunction() {
// 	console.log('callback');
// }

// function handleClick(callback) {
// 	console.log('handleClick');
// 	callback();
// }

// handleClick(callbackFunction);
// document.querySelector('.b-4').addEventListener('click', callbackFunction);

// const fruits = ['orange', 'apple', 'pineapple', 'apricot'];

// const b = fruits.filter(function(arr){

// 	return arr;
// })
// console.log('fruits', fruits);



// const vegetable = ['cabbage', 'turnip', 'radish', 'carrots',];
// function arrayClone(arr) {
// 	return arr.slice(0);
// };

// const arr1 = arrayClone(vegetable);

// console.log(arr1);


// const num = prompt('Keep the number', 55);

// function colonOdd (num) {
//   let str = num.toString();
//   let result = [str[0]];
//   for(var i=1; i<str.length; i++) {
//       if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
//         result.push(':', str[i]);
//        }
//       else {
//         result.push(str[i]);
//       }
//   }
//   return result.join('');  
// }
// console.log(num);


 
// const array = [1,2,3,4,5,6,7,8,9];

// function getFirst(array, n) {
//     if (array == null) return false;
//     if (n == null) return array[0];
//   return array.slice(0, n);
// };

// console.log(getFirst(array, 4));

// function compareNumbers(arr){
//   var arr = arr.sort(function(a,b){return a-b})
//   console.log(arr);
// }

// var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

// compareNumbers(numbers);

// const mas = {
// 	Name: "Karina",
// 	Surname: 'Gunko',
// 	Age: 19,
// 	village: "Humps",
// }

// for (const key in mas) {
// 	out.innerHTML += key +'  ' + mas[key] + '<br>';
// }


// const animal = {
// 	name: 'animal',
// 	age: 5,
// 	hasTail: true
// }

