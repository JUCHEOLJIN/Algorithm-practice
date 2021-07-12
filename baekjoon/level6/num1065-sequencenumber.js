"use strict";
// 3번 문제
// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
// 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
// N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.
// 입력
// 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.
// 출력
// 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split('');

let input = 1000;
let count = 0;

function compareNumber(numbers) {
  // 한수인지 판단하기 위해 각 자리수를 비교하는 함수!
  let a = numbers[0];
  let b = numbers[1];
  let c = numbers[2];
  return b - a === c - b ? true : false; // 등차수열이면 true 반환!
}

function findSequence(num) {
  if (num < 100) {
    // 2자리수는 모두가 등차수열을 이루는 한수! 그렇기 때문에 숫자 그대로 할당!
    count = num;
  } else {
    // 3자리수는 한수인지 구별이 필요!
    for (let i = 100; i <= num; i++) {
      // 100부터 주어진 숫자까지 반복해야함.
      let number = i.toString().split(""); // 먼저 각 자리수 배열로 치환
      const isSequence = compareNumber(number); // isSequence에 boolean 값 넣기
      if (isSequence) {
        // true라면 한수니까 카운트 1 올려주기!
        count += 1;
      }
    }
    count += 99; // 3자리 수 이상인 경우에는 기본적으로 2자리수인 99개를 더해야한다.
  }
}
findSequence(input);
console.log(count);
