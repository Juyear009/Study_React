// 1. 함수 표현식식
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 함수 자체를 변수에 담음
varA();

let varB = function () {
  // 함수를 생성할 때 바로 변수에 담을 수 있음
  // 함수 이름을 생략해도 됨 -> 익명함수라고 부름
  console.log("funcB");
};
varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
