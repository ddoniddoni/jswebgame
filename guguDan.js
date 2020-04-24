let number1 = Math.ceil(Math.random() * 9);
let number2 = Math.ceil(Math.random() * 9);
let result = number1 * number2;

const guguDanText = document.querySelector(".guguDan__text");
guguDanText.textContent = String(number1) + "X" + String(number2) + "는?";

const guguDanForm = document.querySelector(".guguDan__form");
const guguDanInput = document.querySelector(".guguDan__input");
guguDanInput.type = "number";

const guguDanBtn = document.querySelector(".guguDan__btn");
guguDanBtn.textContent = "입력";

const guguDanResult = document.querySelector(".guguDan__result");

const getMulitiply = (e) => {
  e.preventDefault();
  if (result === Number(guguDanInput.value)) {
    guguDanResult.textContent = "딩동댕";
    number1 = Math.ceil(Math.random() * 9);
    number2 = Math.ceil(Math.random() * 9);
    result = number1 * number2;
    guguDanText.textContent =
      String(number1) + "곱하기" + String(number2) + "는?";
    guguDanInput.value = "";
    guguDanInput.focus();
  } else {
    guguDanResult.textContent = "땡!";
    guguDanInput.value = "";
    guguDanInput.focus();
  }
};

guguDanForm.addEventListener("submit", getMulitiply);
