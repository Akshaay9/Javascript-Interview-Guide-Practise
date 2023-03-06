Array.prototype.customSome = function (cb) {
    const arr = this;
  
    for (let i = 0; i < arr.length; i++) {
      const callBackInitiate = cb(arr[i]);
      if (callBackInitiate) {
        return true;
      }
    }
    return false;
  };
  
  const array = [1, 2, 3, 4, 5];
  
  // checks whether an element is even
  const even = (element) => element % 2 === 0;
  console.log(array.customSome(even));
  