Array.prototype.myEach = function (fun) {
    for (let i = 0; i < this.length; i++) {
      fun(this[i], i, this);
    }
  };
  
  const arr = [1, 2, 3, 4, 5];
  
  arr.myEach((ele) => {
    console.log(ele);
  });
  