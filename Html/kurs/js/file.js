// let list = document.querySelector('.list');


// list.addEventListener('mousemove', function(event) {
// 	console.log('event', event.target);
// });

// function addEventListener (eventName, callbackFunction)
// {
// callbackFunction() 	
// }


const li = document.getElementById('one');

li.onclick = function () {
	this.style.background = 'red';
}
