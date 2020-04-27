const lottoBonus = document.querySelector(".lotto__bonus");
const lottoBall = document.querySelector(".lotto__ball");
const lottoResult = document.querySelector(".lotto__result");

let lottoArray = Array(45)
  .fill()
  .map((context, index) => {
    return index + 1;
  });

let shuffle = [];
while (lottoArray.length > 0) {
  let moveNum = lottoArray.splice(Math.floor(Math.random() * lottoArray.length), 1)[0];
  shuffle.push(moveNum);
}

let bonusBall = shuffle[shuffle.length - 1];
let winningBall = shuffle.slice(0, 6).sort((p, c) => {
  return p - c;
});

const fillBall = (num, lotto) => {
  lottoBall.textContent = num;
  let backColor;
  if (num <= 10) {
    backColor = "red";
  } else if (num <= 20) {
    backColor = "orange";
  } else if (num <= 30) {
    backColor = "yellow";
  } else if (num <= 40) {
    backColor = "blue";
  } else {
    backColor = "green";
  }
  lottoBall.style.background = backColor;
};

for (let i = 0; i < winningBall.length; i++) {
  (function closer(j) {
    setTimeout(() => {
      fillBall(winningBall[j], lottoResult);
    }, (j + 1) * 1000);
  })(i);
}

setTimeout(function callback() {
  fillBall(bonusBall, lottoBonus);
}, 7000);
