function Helper(arr) {
    this.arr = arr;
    this.count = -1;
  
    //
    this.next = function () {
      this.count++;
      if (this.count < this.arr.length) {
        return this.arr[this.count];
      } else {
        return null;
      }
    };
  
    //
    this.done = function () {
      return this.count === this.arr.length - 1;
    };
  }
  
  let iterator = new Helper([1, 2, "hello"]);
  console.log(iterator.next()); // 1
  console.log(iterator.next()); // 2
  console.log(iterator.done()); // false
  console.log(iterator.next()); // "hello"
  console.log(iterator.done()); // true
  console.log(iterator.next()); // "null"
  