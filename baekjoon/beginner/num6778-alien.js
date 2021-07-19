// 문제
// Canada Cosmos Control has received a report of another incident.
// They believe that an alien has illegally entered our space.
// A person who witnessed the appearance of the alien has come forward to describe
// the alien’s appearance.
// It is your role within the CCC to determine which alien has arrived.
// There are only 3 alien species that we are aware of, described below:
// TroyMartian, who has at least 3 antenna and at most 4 eyes;
// VladSaturnian, who has at most 6 antenna and at least 2 eyes;
// GraemeMercurian, who has at most 2 antenna and at most 3 eyes.
// 입력
// The first line contain the number of antenna that the witness claimed to have seen on the alien.
// The second line contain the number of eyes seen on the alien.
// 출력
// The output will be the list of aliens who match the possible description given by the witness.
// If no aliens match the description, there is no output.
"use strict";
// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let baekinput = "8\n6";
let input = baekinput.toString().split("\n");
let num1 = Number(input[0]);
let num2 = Number(input[1]);

function solution(num1, num2) {
  let result = "";
  if (num1 >= 3 && num2 <= 4) {
    result += "TroyMartian\n";
  }
  if (num1 <= 6 && num2 >= 2) {
    result += "VladSaturnian\n";
  }
  if (num1 <= 2 && num2 <= 3) {
    result += "GraemeMercurian\n";
  }
  console.log(result);
}

solution(num1, num2);
