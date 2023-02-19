let obj1 = {
    name: "prashant",
    age: 23,
  };
  
  let obj2 = {
    qualification: "BSC CS",
    loves: "Javascript",
  };
  
  const recurse = (obj, result) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result = {
          ...result,
          [key]: obj[key],
        };
      }
    }
    return result;
  };
  
  const merge = (...args) => {
    let result = {};
  
    for (let i = 0; i < args.length; i++) {
      result = {
        ...result,
        ...recurse(args[i], result),
      };
    }
    return result;
  };
  
  let merged = merge(obj1, obj2);
  console.log(merged);
  