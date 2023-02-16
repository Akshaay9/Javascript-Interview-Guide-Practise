const sum = (...argsOne) => {
    if (argsOne.length === 0) return 0;
    let storage = [];
    storage.push(...argsOne);
  
    const recurse = (...args2) => {
      storage.push(...args2);
      if (args2.length === 0) {
        return storage.reduce((acc, ele) => acc + ele, 0);
      } else {
        return recurse;
      }
    };
    return recurse;
  };
  
  const res = sum(1, 2, 3, 4)();
  const res2 = sum(1)(2)(3)(4)();
  const res3 = sum(1, 2)(3, 4)();
  const res4 = sum(1, 2, 3)(4)();
  const res5 = sum(1)(2, 3, 4)();
  const res6 = sum();
  console.log(res, res2, res3, res4, res5, res6);
  