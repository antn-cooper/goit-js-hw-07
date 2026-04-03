'use strict';

const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const userInfo = { email: elements.email.value.trim(), password: elements.password.value.trim() };
  if (userInfo.email === '' || userInfo.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(userInfo);
    event.target.reset();
  }
}
