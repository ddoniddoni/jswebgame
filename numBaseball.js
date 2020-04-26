const numBallResult = document.querySelector(".numBall__result");
const numBallForm = document.querySelector(".numBall__form");
const numBallInput = document.querySelector(".numBall__input");
const numBallBtn = document.querySelector(".numBall__btn");

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
console.log(numArray);

numBallInput.type = "text";
numBallInput.maxLength = 4;
numBallBtn.textContent = "입력!";

const failNum = 0;

const runBaseBall = (e) => {
  e.preventDefault();
  let answer = numBallInput.nodeValue;
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
    if (failNum > 10) {
      numBallResult.textContent =
        "10번 넘게 틀려서 실패! 답은" + numArray.join(",") + "였습니다!";
      numBallInput.value = "";
      numBallInput.focus();
      numRandom();
      failNum = 0;
    } else {
      console.log("답이 틀리면", answerArray);
      for (let i = 0; i < 3; i += 1) {
        if (Number(answerArray[i]) === numArray[i]) {
          console.log("같은 자리?");
          strike += 1;
        } else if (numArray.indexOf(Number(answerArray[i])) > -1) {
          console.log("겹치는 숫자?");
          ball += 1;
        }
      }
      numBallResult.textContent = strike + "스트라이크" + 볼 + "볼입니다.";
      numBallInput.value = "";
      numBallInput.focus();
    }
  }
};

numBallForm.addEventListener("submit", runBaseBall);
