const p = new Promise((res, rej) => {
    setTimeout(() => {
      res("hey");
    }, 2000);
  });
  
  const p2 = Promise.resolve("hey2");
  
  const p3 = new Promise((res, rej) => {
    setTimeout(() => {
      res("reject");
    }, 3000);
  });
  
  // Promise.race([p, p2, p3])
  //   .then((ele) => {
  //     console.log(ele);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  
  const promiseAny = (promises) => {
    return new Promise((res, rej) => {
      promises.forEach((prom) => {
        prom
          .then((p) => {
            res(p);
          })
          .catch((err) => {
            rej(err);
          });
      });
    });
  };
  
  // promiseAny([p, p2, p3])
  //   .then((ele) => {
  //     console.log(ele);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  
  const test1 = new Promise(function (resolve, reject) {
    setTimeout(reject, 500, "one");
  });
  const test2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "two");
  });
  const test3 = new Promise(function (resolve, reject) {
    setTimeout(reject, 200, "three");
  });
  
  promiseAny([test1, test2, test3])
    .then(function (value) {
      console.log(value);
    })
    .catch(function (err) {
      console.log(err);
    });
  