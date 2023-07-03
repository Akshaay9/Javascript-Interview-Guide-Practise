//  https://www.youtube.com/watch?v=hfH57rdZhOk&ab_channel=NeetCodeIO
// https://leetcode.com/problems/promise-time-limit/description/

var timeLimit = function (fn, t) {
    return async function (...args) {
      return new Promise((res, rej) => {
        // if this reuns first then reject immediately
        setTimeout(() => {
          rej("Time Limit Exceeded");
        }, t);
  // call the asyn fn function with .then .catch and and res and rej it
        fn(...args)
          .then((ele) => {
            res(ele);
          })
          .catch((err) => rej(err));
      });
    };
  };
  
  const fn = (args) => {
    return new Promise((res) => setTimeout(res, args));
  };

  // Time limit is taking fn and 100 and returning a function
  // it is being called again with 150
  // then there is a catch block meaning it is returning a promise


  const limited = timeLimit(fn, 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms