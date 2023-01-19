//  PRMOSE. ALL Settled

const a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 2000)
);
const b = new Promise((resolve, reject) => resolve(9));
const c = new Promise((resolve) => resolve(5));

Promise.allSettled([a, b, c])
  .then((ele) => {
    console.log(ele);
  })
  .catch((err) => {
    console.log(err);
  });

const myAllSetteld = (promises) => {
  const result = [];
  let count = 0;
  return new Promise((res, rej) => {
    promises.forEach(async (promise) => {
      try {
        const resolvedPromise = await promise;
        result.push({ status: "FulFilled", value: resolvedPromise });
        count += 1;
        if (count === promises.length) {
          res(result);
        }
      } catch (error) {
        result.push({ status: "rejected", value: error });
        count += 1;
        if (count === promises.length) {
          rej(result);
        }
      }
    });
  });
};
