Array.prototype.myReduce = function (fun, acc) {
    let i = 0;
    if (acc === undefined) {
      acc = this[0];
      i += 1;
    }
  
    for (; i < this.length; i++) {
      acc = fun(acc, this[i], i);
    }
    return acc;
  };
  
  const arr = [1, 2, 3, 4, 5];
  
  const a = arr.myReduce((acc, ele, i) => {
    console.log(i);
    return (acc += ele);
  });
  
  console.log(a);