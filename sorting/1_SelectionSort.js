const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let minVal = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minVal]) {
          minVal = j;
        }
      }
      [arr[minVal], arr[i]] = [arr[i], arr[minVal]];
    }
    return arr;
  };
  
  console.log(selectionSort([64, 12, 24, 7, 9, 14]));
  
  //  Find the lowest element and swap It
  