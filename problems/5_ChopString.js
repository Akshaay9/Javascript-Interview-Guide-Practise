const arr = "akshay";
const chopLength = 3;

const chopArray = (arr, len) => {
  let i = 0;
  let result = [];
  while (i < arr.length) {
    const currResult = arr.slice(i, i + len);
    result.push(currResult);
    i = i + len;
  }
  return result;
};

console.log(chopArray(arr, chopLength));
