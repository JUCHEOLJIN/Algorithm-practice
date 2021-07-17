"use strict";
// 4101 문제
// 두 양의 정수가 주어졌을 때, 첫 번째 수가 두 번째 수보다 큰지 구하는 프로그램을 작성하시오.
// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 두 정수가 주어진다.
// 두 수는 백만보다 작거나 같은 양의 정수이다. 입력의 마지막 줄에는 0이 두 개 주어진다.
// 출력
// 각 테스트 케이스마다, 첫 번째 수가 두 번째 수보다 크면 Yes를, 아니면 No를 한 줄에 하나씩 출력한다.
// let num1 = input[i].split(" ")[0]; // Cannot read property 'split' of undefined at // 원인 찾음!

// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

let baekinput = "1 19\n4 4\n23 14\n0 0";
let input = baekinput.toString().trimEnd().split("\n");
let result = "";

let i = 0;
while (true) {
  let num1 = Number(input[i].split(" ")[0]); // 숫자로 변환하지 않은 경우 에러가 뜸.
  let num2 = Number(input[i].split(" ")[1]); // 문자의 경우 break 조건을 통과해서 '4' 라는 인덱스를 찾음
  if (num1 === 0 && num2 === 0) {
    break;
  }
  if (num1 > num2) {
    result += "Yes";
  } else {
    result += "No";
  }
  i++;
  result += "\n";
}

console.log(result);
