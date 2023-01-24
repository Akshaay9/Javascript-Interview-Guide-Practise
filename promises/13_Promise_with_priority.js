// -> Call ALl Promise Paralelley
// -> resolve most priorty promise at last
// -> if all promise rejected then reject all promise with priority level

const resolvePromisesWithPriority = (promises) => {
  const rejectedPromise = {};
  let totalPromiseCount = 0;
  let totalRejectedCount = 0;
  let mostPriorityPromise = Infinity;
  let mostPriorityPromiseObj = {};
  return new Promise((res, rej) => {
    promises.forEach(async ({ status, priority }, i) => {
      try {
        const resolvedPromise = await status();
        if (priority < mostPriorityPromise) {
          mostPriorityPromise = priority;
          mostPriorityPromiseObj = { resolvedPromise, priority };
        }
      } catch (error) {
        totalRejectedCount += 1;
        rejectedPromise[i] = true;
      } finally {
        totalPromiseCount += 1;
        if (totalPromiseCount === promises.length) {
          if (totalRejectedCount === promises.length) {
            rej(rejectedPromise);
          } else {
            res(mostPriorityPromiseObj);
          }
        }
      }
    });
  });
};

function createAsyncTask() {
  return () => {
    const value = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, value * 100);
    });
  };
}

const promises = [
  { status: createAsyncTask(), priority: 4 },
  { status: createAsyncTask(), priority: 1 },
  { status: createAsyncTask(), priority: 2 },
  { status: createAsyncTask(), priority: 3 },
];

resolvePromisesWithPriority(promises).then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
