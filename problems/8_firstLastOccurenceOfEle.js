const first = (arr, target) => {
    let occurence = -1;
    let low = 0;
    let heigh = arr.length - 1;
  
    while (low <= heigh) {
      const mid = Math.floor((low + heigh) / 2);
      if (arr[mid] === target) {
        occurence = mid;
        // Last occurence--> low = mid + 1;
        //  first occurence=high=mid-1
      } else if (target < arr[mid]) {
        heigh = mid - 1;
      } else if (target > arr[mid]) {
        low = mid + 1;
      }
    }
    return occurence;
  };
  
  const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10];
  console.log(first(arr, 5));
  console.log(first(arr, 6));
  