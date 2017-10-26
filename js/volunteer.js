// This only works in the console log for now without any backend

console.log(document.forms);

let button = document.getElementById('submitButton');

button.addEventListener('click', function() {
  captureFormValue();
});

function captureFormValue() {
//   let form = document.forms[0]; // this is for shorthand
  let firstname = document.forms[0][0].value;
  let lastname = document.forms[0][1].value;
  let email = document.forms[0][2].value;
  let phone = document.forms[0][3].value;
  let address = document.forms[0][4].value;

  console.log('firstname is ' + firstname);
  console.log('lastname is ' + lastname);
  console.log('email is ' + email);
  console.log('phone is ' + phone);
  console.log('address is ' + address);
}