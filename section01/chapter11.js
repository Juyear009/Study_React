// 함수선언
// 호이스팅
// -> 끌어올리다 라는 뜻
// -> 함수를 코드 밑 부분에 선언해도 실행할 때는 자동으로 함수를 맨 위로 올려서 실행한다.

function greeting() {
  // 일반함수
  console.log("안녕하세요");
}

console.log("호출 전!");
greeting();
console.log("호출 후!");

function getArea(width, height) {
  // 매개체
  function another() {
    // 중첩함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 값 반환환
}

let area1 = getArea(10, 20); // 반환된 값 저장장
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);
console.log(area1, area2, area3);
