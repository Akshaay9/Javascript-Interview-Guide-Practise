Array.prototype.myMap = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const cbVal = cb(this[i], i, this);
    result.push(cbVal);
  }

  return result;
};

let test = [1, 2, 3, 4, 5, 6, 7];

const test2 = test.myMap((ele) => "aksha");

console.log(test2);
