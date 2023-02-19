let obj1 = {
  name: "prashant",
  age: 23,
  skills: { programming: "JavaScript" },
};

let obj2 = {
  qualification: "BSC CS",
  loves: "Javascript",
  skills: { sports: "swimming" },
};

const merge = (...args) => {
  let result = {};

  const recurse = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        result[key] = merge(result[key], obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  };

  for (let i = 0; i < args.length; i++) {
    recurse(args[i]);
  }
  return result;
};

let merged = merge(obj1, obj2);
console.log(merged);
