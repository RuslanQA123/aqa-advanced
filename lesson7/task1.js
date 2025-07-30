function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback(); 
  } else {
    oddCallback(); 
  }
}

handleNum(2, handleEven, handleOdd); 
handleNum(9, handleEven, handleOdd); 