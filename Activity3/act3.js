const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

console.log(doMaths(44)); //[Function (anonymous)]
console.log(doMaths(44)(10, add)); // 54
console.log(doMaths(44)(10, subtract)); // 34
console.log(doMaths(44)(10, multiply)); // 440
console.log(doMaths(44)(10, divide)); // 4.4
