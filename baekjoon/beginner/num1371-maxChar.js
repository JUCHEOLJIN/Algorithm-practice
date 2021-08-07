"use strict";
// 영어에서는 어떤 글자가 다른 글자보다 많이 쓰인다. 예를 들어, 긴 글에서 약 12.31% 글자는 e이다.
// 어떤 글이 주어졌을 때, 가장 많이 나온 글자를 출력하는 프로그램을 작성하시오.
// 입력
// 영어에서는 어떤 글자가 다른 글자보다 많이 쓰인다. 예를 들어, 긴 글에서 약 12.31% 글자는 e이다.
// 어떤 글이 주어졌을 때, 가장 많이 나온 글자를 출력하는 프로그램을 작성하시오.
// 출력
// 첫째 줄에 가장 많이 나온 문자를 출력한다. 여러 개일 경우에는 알파벳 순으로 앞서는 것부터 모두 공백없이 출력한다.

// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().replace(/(\s*)/g, '');

function maxChar(input) {
  // 가장 많이 등장한 문자열을 출력해주는 함수
  let max = 0;
  let maxChar = [];
  let stringMap = {};
  for (let word of input) {
    stringMap[word] = stringMap[word] + 1 || 1; // 등장할 때마다 1 늘려주기, 없으면 1 넣기
  }
  for (let key in stringMap) {
    // 우선 완성된 객체가 필요
    if (stringMap[key] > max) {
      max = stringMap[key];
    }
  }
  for (let key in stringMap) {
    // 완성된 객체에서 최대값보다 작은 것들을 제거하고 큰 것들은 배열로 넣기
    if (stringMap[key] < max) {
      delete stringMap[key];
    }
    if (stringMap[key] === max) {
      maxChar.push(key);
    }
  }
  let result = maxChar.sort().join(""); // 알파벳 순으로 정렬 후에 합쳐서 출력
  console.log(result);
}

maxChar(input);
