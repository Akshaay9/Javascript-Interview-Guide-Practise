Promise.prototype.myFinally = function (callback) {
    if (typeof callback !== "function") {
      return this.then(callback, callback);
    }
  
    // return the promise and call the callback function
    // as soon as the promise is rejected or resolved with its value
    return this.then(() => Promise.resolve(callback()));
  };
  
  const testProm = new Promise((res, rej) => {
    setTimeout(() => {
      rej("hey");
    }, 2000);
  });
  testProm
    .then((e) => {
      console.log("hey");
    })
    .catch((err) => {
      console.log(err);
    })
    .myFinally((err) => {
      console.log("heyyyyy", err);
    });