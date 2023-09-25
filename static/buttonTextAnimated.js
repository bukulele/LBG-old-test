const buttonTextAnimated = document.querySelector('.button-text-animation__container');
const textsContainer = buttonTextAnimated.querySelector('.button-texts__container');
let maxTextWidth = 0;
let textHeight;
const buttonTexts = ['MyTinyDick', 'SPH scenes', 'Femdom', 'MyTinyDick'];
let currentButtonText = 0;

for (let text of buttonTexts) {
  let pElem = document.createElement('p');
  pElem.innerHTML = text;
  textsContainer.insertAdjacentElement('beforeend', pElem);

  if (pElem.offsetWidth > maxTextWidth) {
    maxTextWidth = pElem.offsetWidth;
  }
}
textHeight = textsContainer.firstElementChild.offsetHeight;

buttonTextAnimated.style.width = `${maxTextWidth}px`;
buttonTextAnimated.style.height = `${textHeight}px`;

setTimeout(moveButtonTextsUp, 3000);

function moveButtonTextsUp () {
  if (!buttonTextAnimated.className.includes('button-text-animation__container--animated')) {
    buttonTextAnimated.classList.add('button-text-animation__container--animated');
  }

  if (currentButtonText + 1 === buttonTexts.length - 1) {
    currentButtonText += 1;
    buttonTextAnimated.scrollBy(0, textHeight);
    setTimeout(() => {
      buttonTextAnimated.classList.remove('button-text-animation__container--animated');
      currentButtonText = 0;
      buttonTextAnimated.scroll(0, 0);
    }, 200);
  } else {
    currentButtonText += 1;
    buttonTextAnimated.scrollBy(0, textHeight);
  }
  setTimeout(moveButtonTextsUp, 3000);
}


document.querySelector('.solidblockmenu').addEventListener('mouseenter', moveButtonTextsUp);
