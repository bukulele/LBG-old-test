let buttonTextAnimated = document.querySelector('.button-text-animation__container');
let textsContainer = buttonTextAnimated.querySelector('div');
let buttonTexts = buttonTextAnimated.querySelectorAll('p');
let navbarContainer = document.querySelector('.solidblockmenu');
let maxTextWidth = 0;

for (let text of buttonTexts) {
  if (text.offsetWidth > maxTextWidth) {
    maxTextWidth = text.offsetWidth;
  }
}
buttonTextAnimated.style.width = `${maxTextWidth}px`;

function moveButtonTextsUp (event) {
  if (event.target.className.includes('content-animated')) {
    textsContainer.style.top = `-17px`;
  }
}

function moveButtonTextsDown (event) {
  if (event.target.className.includes('content-animated')) {
    textsContainer.style.top = `0px`;
  }}

navbarContainer.addEventListener('mouseover', moveButtonTextsUp);
navbarContainer.addEventListener('mouseout', moveButtonTextsDown);
