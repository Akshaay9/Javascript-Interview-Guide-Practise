// Implement a mapSeries async function that is similar to the
// Array.map() but returns a promise that resolves on the list of output
// by mapping each input through an asynchronous iteratee function or
// rejects it if any error occurs. The inputs are run in a sequence that is
// one after another

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

let numPromise1 = mapSeries1([a, b, c]);

numPromise1
  .then((result) => console.log("success:", result))
  .catch((err) => console.log("no success", err));
