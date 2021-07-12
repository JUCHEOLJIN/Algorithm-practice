// 1번 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 입력의 마지막에는 0 두 개가 들어온다.
// 출력
// 각 테스트 케이스마다 A+B를 출력한다.

// 풀이고민

// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split('\n');

let input = "1 1\n2 3\n3 4\n9 8\n5 2\n0 0";
const inputs = input.trim().split("\n");
console.log(inputs);

let num1 = Number(inputs[0].split(" ")[0]);
let num2 = Number(inputs[0].split(" ")[1]);
let i = 1;

while (true) {
  if (num1 === 0 && num2 === 0) {
    break;
  }
  console.log(num1 + num2);
  num1 = Number(inputs[i].split(" ")[0]);
  num2 = Number(inputs[i].split(" ")[1]);
  i++;
}

// 왜 백준에서는 오류가 날까 고민하다가 조금 고쳐본 코드
// 오류의 원인은... vscode로 돌려보기 위해서 inputs를 따로 만들었다가 수정 안하고 제출해서였다.
// 쓸데 없이 i를 1부터 시작시키고 num1, num2를 구체적인 값을 지정해줄 필요가 없다.

// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
// let i = 0;
// while (true) {
//   let num1 = Number(input[i].split(" ")[0]);
//   let num2 = Number(input[i].split(" ")[1]);
//   i++;
//   if (num1 === 0 && num2 === 0) {
//     break;
//   }
//   console.log(num1 + num2);
// }
