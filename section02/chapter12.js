function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const Food = "떡볶이";
    callback(Food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
  });
});
