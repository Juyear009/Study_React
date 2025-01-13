const promise = new Promise((resolve, reject) => {
  // 비동기 작업 함수
  // executor

  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10); // Promise의 상태를 fulfilled로 바꿔주는 함수
    } else {
      reject("num이 숫자가 아닙니다."); // Promise의 상태를 rejected로 바꿔주는 함수
    }
  }, 2000);
});

// then 메서드
// -> 그 후에에

promise.then((value) => {
  // then은 promise가 성공했을 때만 값을 가져옴
  console.log(value);
});

promise.catch((error) => {
  // catch는 promise가 실패했을 때만 값(오류)을 가져옴
  console.log(error);
});

// promise chaining
// then 메서드는 실행 후에 똑같은 promise를 반환함
// 따라서 then 메서드에서 반환 받은 promise를 바로 사용하여 catch 메서드를 사용할 수 있음

promise
  .then((value) => {
    // then은 promise가 성공했을 때만 값을 가져옴
    console.log(value);
  })
  .catch((error) => {
    // catch는 promise가 실패했을 때만 값(오류)을 가져옴
    console.log(error);
  });
