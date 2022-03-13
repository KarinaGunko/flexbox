let list = document.querySelector('.list');


list.addEventListener('mousemove', function(event) {
	console.log('event', event.target);
});

function addEventListener (eventName, callbackFunction)
{
callbackFunction() 	
}