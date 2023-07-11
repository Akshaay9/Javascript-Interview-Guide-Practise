//  https://www.youtube.com/watch?v=EY-hxNytjqU&ab_channel=Harshitvashisth

//  Normal debounce method is called trailing debounce method

//  Leading doubouncing

const leadingTrailingDebounce = (
    fn,
    delay,
    option = { leading: false, trailing: true }
  ) => {
    let timerId = null;
    return function (...args) {
      let isFunInvoked = false;
      if (timerId === null && option.leading) {
        fn.call(this, ...args);
        isFunInvoked = true;
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        if (!isFunInvoked && option.trailing) {
          fn.call(this, ...args);
        }
        timerId = null;
      }, delay);
    };
  };
  
  const sayHello = (arg) => {
    console.log("Say hello", arg);
  };
  
  const leadingDB = leadingTrailingDebounce(sayHello, 2000, {
    leading: true,
    trailing: false,
  });
  
  leadingDB(1);
  leadingDB(2);
  leadingDB(3);
  leadingDB(4);
  leadingDB(6);
  