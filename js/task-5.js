'use strict';
const btnElement = document.querySelector('button.change-color');
const bodyElement = document.querySelector('body');
const spanElement = document.querySelector('span.color');

btnElement.addEventListener('click', handleColor);
function handleColor() {
  const setColor = getRandomHexColor();
  bodyElement.style.backgroundColor = setColor;
  spanElement.textContent = setColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
