// 10번 문제 별찍기2
// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString(); // 입력값이 문자로 옴.

let baekInput = Number(input);
let stars = "";

for (let i = 0; i < baekInput; i++) {
  for (let j = baekInput - 1; j > i; j--) {
    stars += " ";
  }
  for (let k = 0; k <= i; k++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);
