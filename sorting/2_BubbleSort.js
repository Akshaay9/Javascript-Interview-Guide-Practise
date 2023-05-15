// BUBBLE SORT

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
  
      //  BUBBLE IT , move top max one to last place opposite to selection sort
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };
  
  const arr1 = [64, 24, 12, 11, 22];
  
  console.log(bubbleSort(arr1));
  