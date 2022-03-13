const form = document.gedElementById('form');
const username = document.gedElementById('username');





form.addEventListener('submit', e => {
	e.prevventDefault();
	console.log('event1', e)
	checkInputs();
});


function chekInputs() {
	const usernameValue = username.value.trim();
}


if (usernameValue === '') {
	setErrorFor(username, 'Заповніть Username');

} else {
	console.log('setErrorFor')
	setSuccessFor(username);
}


function setSuccessFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl. className = 'form-control error'; 
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
		formControl.className = 'form-control success';
}


