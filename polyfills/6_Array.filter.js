Array.prototype.myFilter = function (cb) {
    const result = [];
  
    for (let i = 0; i < this.length; i++) {
      let isCBTrue = cb(this[i], i, this);
      if (isCBTrue) {
        result.push(this[i]);
      }
    }
  
    return result;
  };
  
  let test = [1, 2, 3, 4, 5, 6, 7];
  
  const test2 = test.myFilter((ele) => ele % 2 !== 0);
  
  console.log(test2);
  