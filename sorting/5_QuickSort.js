// Not Working

// Pick a pivot
// place it on its correct place
// all small element is on left
// all large element is on right
// repeat

const arr = [4, 5, 6, 3, 1, 2];

const qsSolve = (arr, low, high) => {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] < arr[pivot] && i < high) {
      i++;
    }
    while (arr[j] > arr[pivot] && j > low) {
      j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return j;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    const partition = qsSolve(arr, low, high);
    quickSort(arr, low, partition - 1);
    quickSort(arr, partition + 1, high);
    return arr;
  }
};

console.log(quickSort(arr, 0, arr.length - 1));
