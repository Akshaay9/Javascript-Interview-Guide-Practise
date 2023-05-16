const mergeTwoSortedArr = (arrOne, arrTwo) => {
    let left = 0;
    let right = 0;
  
    let result = [];
  
    while (left < arrOne.length && right < arrTwo.length) {
      const arrOneEle = arrOne[left];
      const arrTwoEle = arrTwo[right];
  
      if (arrOneEle < arrTwoEle) {
        result.push(arrOneEle);
        left += 1;
      } else {
        result.push(arrTwoEle);
        right += 1;
      }
    }
  
    while (left < arrOne.length) {
      result.push(arrOne[left]);
      left += 1;
    }
  
    while (right < arrTwo.length) {
      result.push(arrTwo[right]);
      right += 1;
    }
    return result;
  };
  
  
  const splitArr = (arr, start, end) => {
    let result = [];
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
    return result;
  };
  
  const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
  
    const leftArr = splitArr(arr, 0, mid);
    const right = splitArr(arr, mid, arr.length);
  
    // FOR FUTRTHER SPLITTING
    const firstHalfResult = mergeSort(leftArr);
    const secondHalfResult = mergeSort(right);
  
    return mergeTwoSortedArr(firstHalfResult, secondHalfResult);
  };
  
  console.log(mergeSort([2, 3, 4, 1, 22, 11, 12, 33, 21, 12, 45, 32]));
  