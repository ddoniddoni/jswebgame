const wordRelay = document.querySelector(".js__webgame-wordrelay");
const wordRelayText = document.querySelector(".wordRelay__text");
const wordRelayForm = document.querySelector(".wordRelay__form");
const wordRelayInput = document.querySelector(".wordRelay__input");
const wordRelayButton = document.querySelector(".wordRelay__btn");
const wordRelayResult = document.querySelector(".wordRelay__result");

wordRelayText.textContent = "또니";
wordRelayButton.textContent = "입력";

const wordRealy = (e) => {
  e.preventDefault();
  if (wordRelayText.textContent[wordRelayText.textContent.length - 1] === wordRelayInput.value[0]) {
    wordRelayResult.textContent = "딩동댕";
    wordRelayText.textContent = wordRelayInput.value;
    wordRelayInput.value = "";
    wordRelayInput.focus();
  } else {
    wordRelayResult.textContent = "땡";
    wordRelayInput.focus();
    wordRelayInput.value = "";
  }
};

wordRelayForm.addEventListener("submit", wordRealy);
