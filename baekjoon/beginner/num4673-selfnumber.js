"use strict";

// 문제
// 셀프 넘버는 1949년 인도 수학자 D.R. Kaprekar가 이름 붙였다.
// 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자.
// 예를 들어, d(75) = 75+7+5 = 87이다.
// 양의 정수 n이 주어졌을 때, 이 수를 시작해서 n, d(n), d(d(n)), d(d(d(n))), ...과
// 같은 무한 수열을 만들 수 있다.
// 예를 들어, 33으로 시작한다면 다음 수는 33 + 3 + 3 = 39이고, 그 다음 수는 39 + 3 + 9 = 51,
// 다음 수는 51 + 5 + 1 = 57이다. 이런식으로 다음과 같은 수열을 만들 수 있다.
// 33, 39, 51, 57, 69, 84, 96, 111, 114, 120, 123, 129, 141, ...
// n을 d(n)의 생성자라고 한다. 위의 수열에서 33은 39의 생성자이고, 39는 51의 생성자, 51은 57의 생성자이다.
// 생성자가 한 개보다 많은 경우도 있다. 예를 들어, 101은 생성자가 2개(91과 100) 있다.
// 생성자가 없는 숫자를 셀프 넘버라고 한다. 100보다 작은 셀프 넘버는 총 13개가 있다.
// 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97
// 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 입력
// 입력은 없다.
// 출력
// 10,000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력한다.
// let solResult = "";

// function d(n, limit, array) {
//   let N = String(n);
//   let result = Number(n);
//   if (result > limit) {
//     return;
//   }
//   for (let i = 0; i < N.length; i++) {
//     result += Number(N[i]);
//   }
//   array.push(result);
//   d(result, limit, array);
// }

// function solution(number) {
//   let array = [...Array(number)].map((a, i) => i + 1);
//   let noSelfNumber = [];
//   for (let i = 1; i < array.length; i++) {
//     d(i, array.length, noSelfNumber);
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (noSelfNumber.indexOf(array[i]) === -1) {
//       solResult += array[i].toString();
//       solResult += "\n";
//     }
//   }
//   console.log(solResult);
// }

// solution(10000);
// 제출 결과는 시간초과... 답은 잘 나오지만 오래 걸린다. 개선할 방법 고민중.

function d(n) {
  let N = String(n);
  let result = Number(n);
  for (let i = 0; i < N.length; i++) {
    result += Number(N[i]);
  }
  return result;
}

function solution(range) {
  let selfNumber = [...Array(range)].map(() => true);
  for (let i = 1; i < range; i++) {
    selfNumber[d(i)] = false;
    if (selfNumber[i]) {
      console.log(i);
    }
  }
}

solution(10000);

// 개선한 방법. 이전의 방법은 너무 많은 경우의 수를 연산해야했음.
// boolean 값을 통해서 인덱스를 출력하도록 변경. 훨씬 개선된 연산 속도를 보임.
