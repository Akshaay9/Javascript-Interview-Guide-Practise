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


  //  OROROROOROROROROR BETTTTTTER WAY. ?////

  const deepFIlter = (input, callback) => {
    //
    const processing = (obj) => {
      for (let key in obj) {
        if (typeof obj[key] === "object") {
          processing(obj[key]);
        } else {
          if (callback(obj[key]) === false) {
            delete obj[key];
          }
        }
        if (obj[key] && Object.keys(obj[key]).length === 0) {
          delete obj[key];
        }
      }
    };
  
    processing(input);
    return input;
  };
  
  console.log(deepFIlter(input, callback));
  