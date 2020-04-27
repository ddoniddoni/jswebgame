const numBallText = document.querySelector(".numBall__text");
const numBallForm = document.querySelector(".numBall__form");
const numBallInput = document.querySelector(".numBall__input");
const numBallBtn = document.querySelector(".numBall__btn");
const numBallResult = document.querySelector(".numBall__result");
let numExample;
let numArray;

const numRandom = () => {
  numExample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numArray = [];
  for (let i = 0; i < 4; i += 1) {
    let numVote = numExample.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    numArray.push(numVote);
  }
};

numRandom();
numBallInput.type = "text";
numBallInput.maxLength = 4;
numBallBtn.textContent = "입력";
numBallText.textContent = "4자리 숫자를 입력";

let failNum = 0;

const runBaseBall = (e) => {
  e.preventDefault();
  let answer = numBallInput.value;
  if (answer === numArray.join("")) {
    numBallResult.textContent = "홈런!";
    numBallInput.value = "";
    numBallInput.focus();
    numRandom();
    failNum = 0;
  } else {
    let answerArray = answer.split("");
    let strike = 0;
    let ball = 0;
    failNum += 1;
    numBallResult.textContent = `${10 - failNum}` + "번 남았습니다.";
    if (failNum > 9) {
      numBallResult.textContent = "10번 넘게 틀려서 실패! 답은" + numArray.join(",") + "였습니다!";
      numBallInput.value = "";
      numBallInput.focus();
      numRandom();
      failNum = 0;
    } else {
      for (let i = 0; i < 3; i += 1) {
        if (Number(answerArray[i]) === numArray[i]) {
          strike += 1;
        } else if (numArray.indexOf(Number(answerArray[i])) > -1) {
          ball += 1;
        }
      }
      numBallText.textContent = strike + " 스트라이크 " + ball + " 볼입니다.";
      numBallInput.value = "";
      numBallInput.focus();
    }
  }
};

numBallForm.addEventListener("submit", runBaseBall);
