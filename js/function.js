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


function checkAge(age) {
  if (age > 19) {
    return true;
  } else {
    return confirm('А родители разрешили?');
  }
}

let age = prompt('Сколько вам лет?', 19);

if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}