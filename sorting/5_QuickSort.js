

// Pick a pivot
// place it on its correct place
// all small element is on left
// all large element is on right
// repeat

const arr = [12, 34, 1, 1, 3, 4, 5];

const getPivotIndex = (arr, start, end) => {
  const startIndex = start;

  //  Count how many elements are smaller than the current element
  let count = 0;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[startIndex]) {
      count += 1;
    }
  }
  const pivotIndex = count + start;
  // swap it with that element
  [arr[startIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[startIndex]];

  // while loop
  while (start < pivotIndex && end > pivotIndex) {
    while (arr[start] <= arr[pivotIndex]) {
      start += 1;
    }
    while (arr[end] > arr[pivotIndex]) {
      end -= 1;
    }
    if (start < pivotIndex && end > pivotIndex) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
    }
  }

  return pivotIndex;
};

const quickSort = (arr, start, end) => {
  if (start >= end) return;

  const pivotIndex = getPivotIndex(arr, start, end);

  //  SORT FIRST HALF
  quickSort(arr, start, pivotIndex - 1);

  //  SORT SENCOND HALF
  quickSort(arr, pivotIndex + 1, end);
};

console.log(quickSort(arr, 0, arr.length - 1));
console.log(arr);
