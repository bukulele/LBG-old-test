const buttonTextAnimated = document.querySelector('.button-text-animation__container');
const textsContainer = buttonTextAnimated.querySelector('.button-texts__container');
let maxTextWidth = 0;
let textHeight;
let currentButtonText = 0;
let currentTextContainerTopPosition = 0;

const buttonTexts = ['MyTinyDick', 'SPH', 'Femdom', 'MyTinyDick'];

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

moveButtonTextsUp();

function moveButtonTextsUp () {
  if (!textsContainer.className.includes('button-texts__container--animated')) {
    textsContainer.classList.add('button-texts__container--animated');
  }

  if (currentButtonText === buttonTexts.length - 1) {
    currentButtonText = 0;
    currentTextContainerTopPosition = currentButtonText * textHeight;
    textsContainer.classList.remove('button-texts__container--animated');
    textsContainer.style.top = `${-currentTextContainerTopPosition}px`;
    setTimeout(() => {
      currentButtonText += 1;
      currentTextContainerTopPosition = currentButtonText * textHeight;
      textsContainer.classList.add('button-texts__container--animated');
      textsContainer.style.top = `${-currentTextContainerTopPosition}px`;
    }, 0);
  } else {
    currentButtonText += 1;
    currentTextContainerTopPosition = currentButtonText * textHeight;
    textsContainer.style.top = `${-currentTextContainerTopPosition}px`;
  }
  setTimeout(moveButtonTextsUp, 3000);
}
