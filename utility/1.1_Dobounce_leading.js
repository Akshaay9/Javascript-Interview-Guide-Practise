//  Normal debounce method is called trailing debounce method

//  Leading doubouncing

const leadingDebounce = (fn, timer) => {
    let timerid = null;
    return function (...args) {
      if (timerid === null) {
        fn.call(this, ...args);
      }
      clearTimeout(timerid);
      timerid = setTimeout(() => {
        timerid = null;
      }, timer);
    };
  };
  
  const sayHello = (arg) => {
    console.log("hello", arg);
  };
  
  const leadingDB = leadingDebounce(sayHello, 2000);
  leadingDB(1);
  leadingDB(2);
  leadingDB(3);
  leadingDB(4);
  leadingDB(6);