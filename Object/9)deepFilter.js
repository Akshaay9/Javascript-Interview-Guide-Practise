const input = {
    a: 1,
    b: {
      c: "Hello World",
      d: 2,
      e: {
        f: {
          g: -4,
        },
      },
      h: "Good Night Moon",
    },
  };
  const callback = (element) => typeof element === "string";
  
  const filter = (obj, callbak) => {
    const processing = (collection) => {
      let obj = {};
      for (const key in collection) {
        if (typeof collection[key] === "object") {
          const ans = processing(collection[key], callbak);
          if (Object.keys(ans).length > 0) {
            obj[key] = ans;
          }
        } else if (callbak(collection[key])) {
          obj = {
            ...obj,
            [key]: collection[key],
          };
        }
      }
      return obj;
    };
  
    return processing(obj);
  };
  
  console.log(filter(input, callback));
  