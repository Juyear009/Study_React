// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것
let num = 10;
let str = 20;

const result = num + str; // <- num이 묵시적으로 String 타입으로 변경됨
console.log(result); // <- 출력 : 1020

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용하여 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum = Number(str1);
console.log(10 + strToNum); // <- 출력 : 20

let str2 = "10개";
let strToNum2 = parseInt(str2); // <- 문자가 포함되어 있는 값을 숫자로 바꾸고 싶을 때는 parseInt를 사용함
console.log(strToNum);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr = String(num1);
console.log(numToStr + "입니다");
