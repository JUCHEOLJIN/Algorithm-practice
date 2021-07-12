// 9번 문제 별찍기1
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
// 출력
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString(); // 입력값이 문자로 옴.

let baekInput = Number(input);

let stars = "";

for (let i = 0; i < baekInput; i++) {
  for (let j = 0; j <= i; j++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);

// console.log()는 한 번 호출하면 다음줄로 넘어감. 따라서 for문 하나로도 가능
// console.log()를 input만큼 여러번 호출하는 것과 한 번만 호출하는 것의 차이.
// baekjoon 상의 실행속도 차이는 2중 for문이 128ms, 단일 for문이 120ms.

let stars2 = "";

for (let i = 0; i < baekInput; i++) {
  stars2 += "*";
  console.log(stars2);
}
