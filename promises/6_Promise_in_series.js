const a = new Promise((res, rej) => {
  setTimeout(() => {
    res("3000");
  }, 3000);
});

const b = new Promise((res, rej) => {
  setTimeout(() => {
    res("1000");
  }, 1000);
});

const c = Promise.resolve(4);

// Recursion

const recurse = (promises) => {
  const currPromise = promises.shift();
  currPromise
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      if (promises.length > 0) {
        recurse(promises);
      }
    });
};
recurse([a, b, c]);

//  RECURSION
const recurse = (promises, n) => {
  if (n >= promises.length) {
    return;
  }
  const currPromise = promises[n];

  currPromise
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      recurse(promises, (n += 1));
    });
};

// For Of Loop

const loopIt = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
};

loopIt([a, b, c]);

// Using Reduce
const asyncSeriesExecuter = (promises) => {
  return promises.reduce((acc, currentPromise) => {
    return acc.then(() => {
      return currentPromise.then((ele) => console.log(ele));
    });
  }, Promise.resolve());
};

const promises = [a, b, c];
asyncSeriesExecuter(promises)
