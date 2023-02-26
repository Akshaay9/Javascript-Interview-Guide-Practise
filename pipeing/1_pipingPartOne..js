const obj = {
    a: {
      b: (a, b, c) => a + b + c,
      c: (a, b, c) => a + b - c,
    },
    d: (a, b, c) => a - b - c,
  };
  
  const Fn = (obj) => {
    return (...args) => {
      const recurse = (object, arguments) => {
        for (let key in object) {
          if (typeof object[key] === "object") {
            recurse(object[key]);
          } else if (typeof object[key] === "function") {
            object[key] = object[key](...args);
          }
        }
      };
      recurse(obj, args);
      return obj;
    };
  };
  
  console.log(Fn(obj)(1, 1, 1));
  