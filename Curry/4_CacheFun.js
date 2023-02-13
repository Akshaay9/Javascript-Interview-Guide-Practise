const factorialVal = (num) => {
  if (num === 1) return 1;
  return num * factorialVal(num - 1);
};

const cacheIt = (fn) => {
  let cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log(cache);
      console.log("not valled");
      return cache[key];
    }
    const resolvedVal = fn(...args);
    console.log("called");
    cache[key] = resolvedVal;
    return resolvedVal;
  };
};

const cachedFunc = cacheIt(factorialVal);
console.log(cachedFunc(5));
console.log(cachedFunc(5));
console.log(cachedFunc(5));
console.log(cachedFunc(5));
console.log(cachedFunc(5));
