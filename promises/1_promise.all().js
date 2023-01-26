
// 2) use for(num of nums) to and try catch to make promises one by one (wont work if there is return new Promise((res,rej)))
// 3)  use try catch inside foreach to make it parallel 



const p = new Promise((res) => {
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
  
  // Default PROMISE.ALL()
  
  Promise.all([p, p2, p3])
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    });
  
  // CUSTOM PROMISE ALL USING FOREACH
  
  const myPromise1 = (promises) => {
    let count = 0;
    const resultantPromise = [];
    return new Promise((res, rej) => {
      promises.forEach(async (ele, idx) => {
        try {
          const resolvedPromise = await ele;
          resultantPromise[idx] = resolvedPromise;
          count += 1;
          if (count === promises.length) {
            res(resultantPromise);
          }
        } catch (error) {
          rej(error);
        }
      });
    });
  };
  
  myPromise1([p, p3, p2])
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    });
  
  // CUSTOM PROMISE ALL USING FOR LOOP
  
  const myPromise2 = (promises) => {
    let count = 0;
    let resolvedPromises = [];
    return new Promise((res, rej) => {
      for (let i = 0; i < promises.length; i++) {
        (async () => {
          try {
            const resolvedPromise = await promises[i];
            resolvedPromises[i] = resolvedPromise;
            count += 1;
            if (count === promises.length) {
              res(resolvedPromises);
            }
          } catch (error) {
            rej(error);
          }
        })();
      }
    });
  };
  
  myPromise2([p, p3, p2])
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    });
  
  // CUSTOM PROMISE ALL USING FOR LOOP and .then and .catch
  
  const myPromise3 = (promises) => {
    let count = 0;
    let resolvedPromises = [];
    return new Promise((res, rej) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then((ele) => {
            resolvedPromises[i] = ele;
            count += 1;
            if (count === promises.length) {
              res(resolvedPromises)
            }
          })
          .catch((err) => {
            rej(err);
          });
      }
    });
  };
  
  myPromise3([p, p3, p2])
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    });
  