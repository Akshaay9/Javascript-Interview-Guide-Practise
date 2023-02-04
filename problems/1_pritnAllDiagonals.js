const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const printDigagonal = (row, col) => {
  let bottomleftRow = row;
  let bottomLeftCol = col;

  while (bottomleftRow >= 0 && bottomLeftCol >= 0) {
    console.log("bottom left", arr[bottomleftRow][bottomLeftCol]);
    bottomleftRow -= 1;
    bottomLeftCol -= 1;
  }
  console.log("-----------------------");

  let bottomRightRow = row;
  let bottomRightCol = col;
  while (bottomRightRow >= 0 && bottomRightCol < arr[0].length) {
    console.log("bottom right", arr[bottomRightRow][bottomRightCol]);
    bottomRightRow -= 1;
    bottomRightCol += 1;
  }
  console.log("-----------------------");
  let topLeftRow = row;
  let topLeftCol = col;
  while (topLeftRow <= arr.length - 1 && topLeftCol >= 0) {
    console.log("top left", arr[topLeftRow][topLeftCol]);
    topLeftRow += 1;
    topLeftCol -= 1;
  }
  console.log("-----------------------");
  while (row < arr.length && col < arr[0].length) {
    console.log("top right", row, col, arr[row][col]);
    row += 1;
    col += 1;
  }
};
printDigagonal(2, 2);
