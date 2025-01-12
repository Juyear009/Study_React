// 1.상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// animal에 저장되는 값 자체를 바꾸는건 안되지만, animal에 저장된 객체의 값을 바꾸는 것은 가능하다.
// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  // 매서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
