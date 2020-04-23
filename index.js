let word = "또니";

while (true) {
  let answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    alert("딩동댕");
    word = answer;
  } else {
    alert("땡");
  }
}
