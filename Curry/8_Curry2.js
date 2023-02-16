const curry = () => {
    let sumVal = 0;
    function sum(val) {
      sumVal += val;
      return sumVal;
    }
    return sum;
  };
  const sum = curry();
  console.log(sum(5));
  console.log(sum(5));
  console.log(sum(5));
  console.log(sum(5));
  