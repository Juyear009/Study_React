// 1. 콜백함수
function main(value) {
  console.log(1);
  console.log(2);
  value(); // main함수가 언제든지 원하는 타이밍에 value함수를 실행할 수 있다
  console.log("end");
}

function sub() {
  console.log("sub");
}

main(sub);
main(() => {
  console.log("sub2");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
