// 2번 문제 "시험 성적"
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
// 입력
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다. // 100
// 출력
// 시험 성적을 출력한다. // A

// 문제 풀이
const fs = require("fs"); // fs 모듈 사용, 단순히 한 번 입력 값을 받기 때문에 readline 사용할 필요성 적음.
const input = fs.readFileSync("./dev/stdin").toString(); // 입력값이 문자로 옴.

let testScore = parseInt(input); // 문자로 받은 입력값을 정수로 변환. Number() method도 가능하다.

if (testScore >= 90) {
  console.log("A");
} else if (testScore >= 80) {
  console.log("B");
} else if (testScore >= 70) {
  console.log("C");
} else if (testScore >= 60) {
  console.log("D");
} else {
  console.log("F");
}
