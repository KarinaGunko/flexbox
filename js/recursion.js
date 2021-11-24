// let t = 0;
// function f1() {
// 	t++;
// 	console.log(t);
// 	if (t === 100) return;
// 	f1();
// }

// f1();
// замикання

// const user = {
//  	name: "karina",
//  	getName: function() {
//  		return this.name;
//  	}
// };

// console.log('user', user);
// console.log('getName', user.getName());


// function add(a, b) {
// 	console.log('ok');
// 	return a + b;
// };

// let result = add(3, 5);
// let result1 = add(4, 8);

// console.log('result', result);
// console.log('result1', result1);



// Функції

// hello();
// визов функцї до її оголошення

function testfunction() {
	const x = 5;
	const y = 10;
	console.log(x + y);
}

function hello() {
	console.log('Hello');
	testfunction();
}

function testfunction2() {
	function t3() {
		console.log('t3 function');
	}
	t3();
	console.log('t3 function2');
 }; // t3() лише тут визивається!!! 

// hello();


// testfunction();
// testfunction();
hello(); 
testfunction2();
// t3(); !помилка