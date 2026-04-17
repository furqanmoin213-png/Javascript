function total(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(total(1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 20, 30)); // 55

