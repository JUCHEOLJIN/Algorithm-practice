"use strict";
// 문제
// 1보다 크거나 같고 12보다 작거나 같은 자연수 n이 주어졌을 때, 합이 n이 되는 두 자연수의 쌍을 찾는 프로그램을 작성하시오.
// 예를 들어, 5가 주어진 경우 가능한 쌍은 1,4와 2,3이 있다. 두 수는 항상 달라야 한다. 즉, 3,3은 올바른 쌍이 아니다.
// 또, 첫 번째 수가 두 번째 수보다 작아야 한다.
// 출력하는 쌍은 항상 사전순으로 출력해야 한다. 즉, 각 쌍의 작은 수로 비교를 해야 한다. 예를 들어 1,5는 2,4보다 사전순으로 앞선다.
// 입력
// 첫째 줄에 테스트 케이스의 수 (< 100)가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, n이 주어진다.
// 출력
// 각 테스트 케이스마다 n을 만드는 쌍을 사전순으로 출력한다. n을 만드는 쌍이 없는 경우에는 아무것도 출력하지 않는다.
// 예제 출력 형식을 참고해 출력한다.

// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

let inputBeak = "4\n2\n7\n6\n3";
let input = inputBeak.trim().split("\n");
let inputsArray = [];

function makeArray(number, newNumber, input) {
  // 입력된 자연수를 만드는 쌍들의 배열 만드는 함수
  for (let i = 1; i < input; i++) {
    if (input / i === 2) {
      return;
    }
    if (number.indexOf(i) === -1) {
      number.push(i);
    }
    if (number.indexOf(input - i) === -1) {
      number.push(input - i);
    }
  }
}

function combineNum(array, newArray) {
  // 짝을 이루는 배열의 숫자들을 묶어주는 함수
  for (let i = 0; i < array.length; i += 2) {
    newArray.push(`${array[i]} ${array[i + 1]}`);
  }
}

function sortArray(array) {
  // 입력값의 중복을 제거하고 작은 순으로 정렬하는 함수
  for (let i = 0; i < array.length; i++) {
    if (inputsArray.indexOf(array[i]) === -1) {
      inputsArray.push(array[i]);
    }
  }
  inputsArray.sort((a, b) => a - b);
}

function injectResult(array, array2, i, result) {
  // 콘솔로그 출력 하기
  for (let j = 0; j < array2.length; j++) {
    if (array2.length === 0) {
      result += "";
    }
    if (array2.length - 1 === j) {
      result += `${array2[j]}`;
    } else {
      result += `${array2[j]}, `;
    }
  }
  console.log(`Pairs for ${array}: ${result}`);
}

function printResult(inputarray) {
  // 최종 출력값을 내보내는 함수
  for (let i = 0; i < inputarray.length; i++) {
    let numbers = [];
    let newNumbers = [];
    let result = "";
    makeArray(numbers, newNumbers, inputarray[i]);
    combineNum(numbers, newNumbers);
    injectResult(inputarray[i], newNumbers, i, result);
    // console.log(newNumbers);
  }
}

sortArray(input);
printResult(inputsArray);
