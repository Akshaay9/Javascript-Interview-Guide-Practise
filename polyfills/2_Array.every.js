Array.prototype.customEvery = function (cb) {
    const arr = this;
  
    for (let i = 0; i < arr.length; i++) {
      const callBackInitiate = cb(arr[i]);
      if (!callBackInitiate) {
        return false;
      }
    }
    return true;
  };
  
  const array = [1, 2, 3, 4, 5];
  
  // checks whether an element is even
  const even = (element) => element % 2 === 0;
  console.log(array.customEvery(even));
  