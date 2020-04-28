const responseScreen = document.querySelector("#response__screen");
const responseResult = document.querySelector(".response__result");

let responseStartTime;
let responseEndTime;
let responseReset;

let responseArray = [];

const responseCheck = () => {
  if (responseScreen.classList.contains("waiting")) {
    responseScreen.classList.remove("waiting");
    responseScreen.classList.add("ready");
    responseScreen.textContent = "초록색이 되면 클릭하세요";
    responseReset = setTimeout(() => {
      responseStartTime = new Date();
      responseScreen.click();
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if (responseScreen.classList.contains("ready")) {
    if (!responseStartTime) {
      clearTimeout(responseReset);
      responseScreen.classList.remove("ready");
      responseScreen.classList.add("waiting");
      responseScreen.textContent = "너무 성급하세요~";
    } else {
      responseScreen.classList.remove("ready");
      responseScreen.classList.add("now");
      responseScreen.textContent = "클릭하세요";
    }
  } else if (responseScreen.classList.contains("now")) {
    responseEndTime = new Date();
    responseArray.push(responseEndTime - responseStartTime);
    responseResult.textContent = `${responseArray}ms`;
    responseStartTime = null;
    responseEndTime = null;
    responseScreen.classList.remove("now");
    responseScreen.classList.add("waiting");
    responseScreen.textContent = "클릭해서 시작하세요";
  }
};

responseScreen.addEventListener("click", responseCheck);
