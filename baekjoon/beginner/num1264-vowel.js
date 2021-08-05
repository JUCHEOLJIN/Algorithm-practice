"use strict";
// 문제
// 영문 문장을 입력받아 모음의 개수를 세는 프로그램을 작성하시오. 모음은 'a', 'e', 'i', 'o', 'u'이며 대문자 또는 소문자이다.
// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있으며, 각 줄마다 영어 대소문자, ',', '.', '!', '?', 공백으로 이루어진 문장이 주어진다.
// 각 줄은 최대 255글자로 이루어져 있다.
// 입력의 끝에는 한 줄에 '#' 한 글자만이 주어진다.
// 출력
// 각 줄마다 모음의 개수를 세서 출력한다.

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

function getVowelNumber(paragraph, count) {
  // 모음의 수를 출력하는 함수
  for (let i = 0; i < paragraph.length; i++) {
    switch (paragraph[i]) {
      case "a":
      case "A":
        count += 1;
        break;
      case "e":
      case "E":
        count += 1;
        break;
      case "i":
      case "I":
        count += 1;
        break;
      case "o":
      case "O":
        count += 1;
        break;
      case "u":
      case "U":
        count += 1;
        break;
    }
  }
  console.log(count);
}

for (let i = 0; i < input.length; i++) {
  // 반복문을 통해 케이스마다 모음의 개수 출력
  let countWord = 0;
  if (input[i] === "#") {
    break;
  }
  getVowelNumber(input[i], countWord);
}
