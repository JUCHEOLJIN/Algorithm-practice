// 문제
// 두 양의 정수가 주어졌을 때, 두 수 사이에 있는 정수를 모두 출력하는 프로그램을 작성하시오.
// 입력
// 두 정수 A와 B가 주어진다.
// 출력
// 첫째 줄에 두 수 사이에 있는 수의 개수를 출력한다.
// 둘째 줄에는 두 수 사이에 있는 수를 오름차순으로 출력한다

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

function solution(input) {
  let A = Number(input[0]);
  let B = Number(input[1]);
  let result = "";
  if (A > B) {
    let count = A - B - 1;
    for (let i = 1; i <= count; i++) {
      if (i === count) {
        result += `${B + i}`;
        break;
      }
      result += `${B + i} `;
    }
    console.log(count);
    console.log(result);
  } else if (A < B) {
    let count = B - A - 1;
    for (let i = 1; i <= count; i++) {
      if (i === count) {
        result += `${A + i}`;
        break;
      }
      result += `${A + i} `;
    }
    console.log(count);
    console.log(result);
  } else {
    console.log(0);
  }
}

solution(input);
