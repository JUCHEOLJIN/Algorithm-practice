// 9번 문제 사칙연산
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
// 입력
// 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000) // 7 3
// 출력
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다. // 10 4 21 2 1



// 문제 풀이

let fs = require("fs"); // fs 모듈 사용
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let A = parseInt(input[0]);
let B = parseInt(input[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B)); // 소수점을 정수로 변환하는 방식으로 사용
console.log(A%B);

