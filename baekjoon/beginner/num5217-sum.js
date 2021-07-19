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

let inputBeak = "4\n2\n3\n4\n5";
let input = inputBeak
  .trim()
  .split("\n")
  .map((x) => +x);

let caseNum = input[0];
function makeArray(number, input) {
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

function makeResult(input, numberArray, result) {
  // 콘솔로그 출력 하기
  for (let j = 0; j < numberArray.length; j++) {
    if (numberArray.length === 0) {
      result += "";
    }
    if (numberArray.length - 1 === j) {
      result += `${numberArray[j]}`;
    } else {
      result += `${numberArray[j]}, `;
    }
  }
  console.log(`Pairs for ${input}: ${result}`);
}

function printResult(input) {
  // 최종 출력값을 내보내는 함수
  for (let i = 1; i < input.length; i++) {
    let numbers = [];
    let newNumbers = [];
    let result = "";
    makeArray(numbers, input[i]);
    combineNum(numbers, newNumbers);
    makeResult(input[i], newNumbers, result);
  }
}

printResult(input);

// let output = "";

// let n = +input[0]; // 첫번째 입력값은 출력값에 반영 안되니까(테스트 케이스의 수여서) 첫번째 값은 버린다
// for(let i=1; i<=n; i++){ // 첫번째 입력값 만큼 input을 받았기에 해당 갯수만큼 돌린다
// 	const c = input[i];   // input의 첫번째 테스트케이스부터 순서대로 돌린다

// 	let arr = [];
// 	for(let j=1; j<c-j; j++){
// 		arr.push([j, c-j]); // 3 -> [1, 2] , 4 -> [1, 3]
// 	}

//     output += `Pairs for ${c}: ${arr.map(x => x.join(" ")).join(', ')}\n`
// }
// console.log(output);
// 참고하면 좋을 코드. 내장되어 있는 join()을 이용해서 심플하게 구성했다.
