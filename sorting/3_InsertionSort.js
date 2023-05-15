const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }
    }
    return arr;
  };
  console.log(insertionSort([64, 12, 24, 7, 9, 14]));
  