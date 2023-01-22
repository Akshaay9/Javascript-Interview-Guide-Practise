const chopArr = (arr, num) => {
    let result = [];
    let tempResult = [];
    for (let i = 0; i < arr.length; i++) {
      const currNum = arr[i];
      tempResult.push(currNum);
      if ((i + 1) % num === 0 && i !== 0) {
        result.push(tempResult);
        tempResult = [];
        chopCount = 1;
      }
    }
    result.push(tempResult);
    return result;
  };
  
  const mapSeries = (arr, callBackFun) => {
    return new Promise((res, rej) => {
      const final = arr.reduce((acc, ele) => {
        return acc.then((accProm) => {
          return new Promise((res, rej) => {
            callBackFun(ele, (status, result) => {
              if (status) {
                res(ele);
              } else {
                rej(status, "error");
              }
            });
          });
        });
      }, Promise.resolve());
  
      final
        .then((ele) => {
          res(ele);
        })
        .catch((err) => {
          rej(err);
        });
    });
  };
  
  let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
    setTimeout(function () {
      num = num * 2;
      console.log(num);
      // throw error
      if (num === 12) {
        callback(true);
      } else {
        callback(false, num);
      }
    }, 1000);
  });
  
  numPromise
    .then((result) => console.log("success:" + result))
    .catch((err) => console.log("no success", err));
  

  //  PRACTISE PROBLEM IMPORTANT

  const a = (cb) =>
  setTimeout(() => {
    console.log("a");
    cb("a");
  }, 1000);
const b = (cb) =>
  setTimeout(() => {
    console.log("b");
    cb("b");
  }, 1000);
const c = (cb) =>
  setTimeout(() => {
    console.log("c");
    cb("c");
  }, 1000);

const mapSeries1 = (arr) => {
  return new Promise((res, rej) => {
    const final = arr.reduce((acc, ele) => {
      return acc.then((prom) => {
        return new Promise((res, rej) => {
          ele((val) => {
            res([...prom, val]);
          });
        });
      });
    }, Promise.resolve([]));

    final
      .then((ele) => {
        res(ele);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

let numPromise1 = mapSeries([a, b, c]);

numPromise
  .then((result) => console.log("success:" + result))
  .catch((err) => console.log("no success", err));
