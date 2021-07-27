"use strict";
// 문제
// Given an odd integer N,
// calculate the sum of all the odd integers between 1 and N inclusive.
// 입력
// First line of the input contains T, the number of test cases.
// Each test case contains a single integer N. N is between 1 and 100.
// 출력
// For each test case output the value 1+3+….+N.

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const inputs = "10\n1\n3\n5\n7\n9\n11\n13\n15\n17\n19";
const input = inputs.toString().trim().split("\n");

const caseCount = Number(input[0]);
for (let i = 1; i <= caseCount; i++) {
  let result = 0;
  let odd = Number(input[i]);
  for (let j = 1; j < odd; j += 2) {
    result += j;
  }
  result += odd;
  console.log(result);
}
