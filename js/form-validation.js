function getFormName(){
	event.preventDefault();

	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let address = document.getElementById("address").value;


	let userData = [firstName, lastName, address,];
	
	console.log(firstName);
	console.log(lastName);
	console.log(address);
	document.getElementById("fist-name-result").innerHTML = firstName;
	document.getElementById("last-name-result").innerHTML = lastName;
	document.getElementById("address-result").innerHTML = address;
};
