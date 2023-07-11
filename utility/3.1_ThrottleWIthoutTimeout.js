const throttleWithoutTimeout = (fn, delay) => {
    let timerId;
    return function (...args) {
      let now = Date.now();
      if (!timerId || now - timerId > delay) {
        fn.call(this, ...args);
        timerId = now;
      }
    };
  };
  
  const sayHello = (arg) => {
    console.log(` Say Hello ${arg}`);
  };
  
  const throttle = throttleWithoutTimeout(sayHello, 1000);
  throttle(`1`);
  