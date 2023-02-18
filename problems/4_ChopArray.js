const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const chopLength = 3;

const chopArray = (arr, len) => {
  const result = [];
  let tempResult = [];

  for (let i = 0; i < arr.length; i++) {
    tempResult.push(arr[i]);
    if ((i + 1) % len === 0) {
      result.push(tempResult);
      tempResult = [];
    }
  }
  result.push(tempResult);

  return result;
};

console.log(chopArray(arr, chopLength));