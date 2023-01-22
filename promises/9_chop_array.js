const chopArr = (arr, num) => {
    let result = [];
    let tempResult = [];
    for (let i = 0; i < arr.length; i++) {
      const currNum = arr[i];
      tempResult.push(currNum);
      if ((i + 1) % num === 0 && i !== 0) {
        result.push(tempResult);
        tempResult = [];
        chopCount = 1;
      }
    }
    result.push(tempResult);
    return result;
  };
  
//   console.log(chopArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
  