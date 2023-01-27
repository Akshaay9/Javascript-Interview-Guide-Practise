// Implement a function that takes an array of input and an async
// iteratee function and returns a promise that resolves with the list of
// inputs that has passed the test through the iteratee function.


const filter = (arr, fun) => {
    return new Promise((res, rej) => {
      let count = 0;
      let result = [];
      arr.forEach((ele, i) => {
        fun(ele, (status, isAccepted) => {
          if (status) {
            rej("Rejected");
          } else {
            count += 1;
            if (isAccepted) {
              result[i] = ele; 
              //  Or result.push(ele)
            }
            if (count >= arr.length) {
              res(result.filter(Boolean));
            }
          }
        });
      });
    });
  };
  
  let numPromise = filter([1, 2, 3, 4, 5], function (num, callback) {
    setTimeout(function () {
      num = num * 2;
      console.log(num);
      // throw error
      if (num === 7) {
        callback(true);
      } else {
        callback(null, num !== 4);
      }
    }, 2000);
  });
  numPromise
    .then((result) => console.log("success:" + result))
    .catch(() => console.log("no success"));
  