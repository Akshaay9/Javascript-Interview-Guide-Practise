// vImplement a mapLimit function that is similar to the Array.map() but
// returns a promise that resolves on the list of output by mapping each
// input through an asynchronous iteratee function or rejects it if any
// error occurs. It also accepts a limit to decide how many operations can
// occur at a time.


//  ERROR is there but focus on APPROACH DUDE

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
  
  const mapLimit = (arr, limit, callBackFun) => {
    const choppedArr = chopArr(arr, limit);
    return new Promise((res, rej) => {
      const final = choppedArr.reduce((acc, ele) => {
        acc.then((promEle) => {
          return new Promise((res, rej) => {
            let prAmount = 0;
            ele.forEach((ele) => {
              callBackFun(ele, (error, val) => {
                if (error) {
                  rej(err);
                } else {
                  prAmount += 1;
                  if (prAmount === choppedArr.length - 1) {
                    res([...promEle, val]);
                  }
                }
              });
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
  
  let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
    setTimeout(function () {
      num = num * 2;
      console.log(num);
      callback(null, num);
    }, 2000);
  });
  
  numPromise
    .then((result) => console.log("success:" + result))
    .catch(() => console.log("no success"));
  