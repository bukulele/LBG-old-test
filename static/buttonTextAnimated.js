let buttonTextAnimated = document.querySelector('.button-text-animation__container');
let textsContainer = buttonTextAnimated.querySelector('div');
let buttonTexts = buttonTextAnimated.querySelectorAll('p');
let maxTextWidth = 0;

for (let text of buttonTexts) {
  if (text.offsetWidth > maxTextWidth) {
    maxTextWidth = text.offsetWidth;
  }
}
console.log(textsContainer);
buttonTextAnimated.style.width = `${maxTextWidth}px`;

function moveButtonTextsUp () {
  console.log('PIU');
  textsContainer.style.top = `-17px`;
}

function moveButtonTextsDown () {
  textsContainer.style.top = `0px`;
}

buttonTextAnimated.addEventListener('mouseenter', moveButtonTextsUp);
buttonTextAnimated.addEventListener('mouseleave', moveButtonTextsDown);
