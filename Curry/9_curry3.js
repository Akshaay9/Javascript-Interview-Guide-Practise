const curryMultiply = (fn) => {
    const funLen = fn.length;
    let result = [];
  
    const recurse = (...args) => {
      result.push(...args);
      if (result.length >= funLen) {
        const ans = fn(...result);
        result = [];
        return ans;
      } else {
        return recurse;
      }
    };
    return recurse;
  };
  
  const multiply = (a, b, c) => {
    return a * b * c;
  };
  
  let curryIt = curryMultiply(multiply);
  
  console.log(curryIt(1)(2, 3));
  console.log(curryIt(1)(2)(3));
  console.log(curryIt(1, 2)(3));
  