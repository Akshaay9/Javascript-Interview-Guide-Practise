const obj = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
        L: 56,
      },
      Q: [1, 2],  // for in auto convert this in to {0:1,1:2}
    },
  };
  
  // { A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }
  
  const recurse = (obj, argKey) => {
    let result = {};
    for (let key in obj) {
      const currEle = obj[key];
      const newKey = argKey ? `${argKey}.${key}` : key;
      if (typeof currEle === "string" || typeof currEle === "number") {
        result = { ...result, [newKey]: currEle };
      } else if (typeof currEle === "object") {
        result = {
          ...result,
          ...recurse(currEle, newKey),
        };
      }
    }
  
    return result;
  };
  
  console.log(recurse(obj));
  