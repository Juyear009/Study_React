function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(returnFalse() || returnTrue());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name; // person이 비어 있다면 undefined가 저장됨
  console.log(name || "person의 값이 없음"); // undefined라면 person의 값이 없음(truthy)가 출력됨됨
}

printName(); // person의 값이 없음 출력
printName({ name: "이정환" }); // 이정환 출력
