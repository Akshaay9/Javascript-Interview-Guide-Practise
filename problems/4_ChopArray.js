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

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const chopLength1 = 3;

const chopArray1 = (arr, len) => {
  let i = 0;
  let result = [];
  while (i < arr.length) {
    const currResult = arr.slice(i, i + len);
    result.push(currResult);
    i = i + len;
  }
  return result;
};

console.log(chopArray1(arr1, chopLength1));


