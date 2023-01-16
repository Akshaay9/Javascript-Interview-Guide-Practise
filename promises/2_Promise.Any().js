const p = new Promise((res, rej) => {
    setTimeout(() => {
      rej("hey");
    }, 2000);
  });
  
  const p2 = Promise.reject("hey2");
  
  const p3 = new Promise((res, rej) => {
    setTimeout(() => {
      rej("reject");
    }, 3000);
  });
  
  // Default PROMISE.ALL()
  
  Promise.any([p, p2, p3])
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    });
  
  // CUSTOM Promise.ANY()
  
  const promiseAny = (promises) => {
    let rejectedCount = 0;
    const promiseError = [];
    return new Promise((res, rej) => {
      promises.forEach(async (ele, count) => {
        try {
          const resolvedPromise = await ele;
          res(resolvedPromise);
        } catch (error) {
          promiseError[count] = error;
          rejectedCount += 1;
          if (rejectedCount === promises.length) {
            rej(promiseError);
          }
        }
      });
    });
  };
  promiseAny([p, p2, p3])
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    });
  
  //
  const any = function (promisesArray) {
    const promiseErrors = new Array(promisesArray.length);
    let counter = 0;
    //return a new promise
    return new Promise((resolve, reject) => {
      promisesArray.forEach((promise) => {
        Promise.resolve(promise)
          .then(resolve) // resolve, when any of the input promise resolves
          .catch((error) => {
            promiseErrors[counter] = error;
            counter = counter + 1;
            if (counter === promisesArray.length) {
              // all promises rejected, reject outer promise
              reject(promiseErrors);
            }
          });
      });
    });
  };
  
  any([p, p2, p3])
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    });
  