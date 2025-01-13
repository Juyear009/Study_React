// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1.2 for of 반복문문
for (let value of arr) {
  console.log(value);
}

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 변환

let keys = Object.keys(person);
console.log(keys); // [name, age, hobby]

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  console.log(key, person[key]);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);
console.log(values); // [이정환, 27, 테니스]

for (let value of values) {
  console.log(value);
}

// 2.3 for in
for (let key in person) {
  console.log(key);
}
