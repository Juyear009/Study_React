// 5가지 배열 변형 메서드
// 1. filter
// 기본 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") {
    return true;
  }
});

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort((a, b) => {
  if (a > b) {
    return 1; // b를 a앞에 배치
  } else if (a < b) {
    return -1; // a를 b안에 배치
  } else {
    return 0; // 두 값의 자리를 바꾸지 마라
  }
});

console.log(arr3);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "b", "a"];
const sorted = arr5.toSorted();

console.log(sorted);
console.log(arr5); // 원본을 수정하지 않음

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("_");
console.log(joined);
