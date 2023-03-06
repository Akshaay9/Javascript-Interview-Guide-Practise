const input = { a: { b: { b2: 2, b3: 3 }, c: { c2: 2, c3: { x: 1, y: 1 } } } };

// let output = {
//   "a.b.b2": 2,
//   "a.b.b3": 3,
//   "a.c.c2": 2,
//   "a.c.c3.x": 1,
//   "a.c.c3.y": 1,
// };

const ajioRecurseion = (input) => {
  let result = {};
  const process = (obj, argKey) => {
    for (let key in obj) {
      const resultKey = argKey ? `${argKey}.${key}` : `${key}`;
      const currKey = obj[key];
      if (typeof currKey === "number") {
        result = {
          ...result,
          [resultKey]: currKey,
        };
      } else {
        process(currKey, resultKey);
      }
    }
  };
  process(input, "");
  return result;
};
console.log(ajioRecurseion(input));
