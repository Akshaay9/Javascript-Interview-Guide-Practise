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
  