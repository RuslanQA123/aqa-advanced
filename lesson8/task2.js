const originalArray = [1, 2, 3, 4, 5];

const mutatedArray = originalArray.map((value, index) => {
  return value * index;
});

console.log("Мутований масив:", mutatedArray);