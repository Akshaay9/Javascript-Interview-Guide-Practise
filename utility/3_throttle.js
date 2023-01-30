const throttle = (timer, callbackfun) => {
    let isCalled = false;
    return function () {
      const args = arguments;
      if (!isCalled) {
        callbackfun(args);
        isCalled = true;
        setTimeout(() => {
          isCalled = false;
        }, timer);
      }
    };
  };
  
  const callBack = (arg) => {
    console.log("Hey", arg);
  };
  
  const throttleIt = throttle(1000, callBack);
  throttleIt("1");
  throttleIt("2");
  throttleIt("3");
  setTimeout(() => {
    throttleIt("4");
  }, 1200);


// TIMER
const throttle1 = (timer, callbackfun) => {
  return function () {
    const currentTimer = this.presentCall;
    this.presentCall = Date.now();
    if (
      this.presentCall - currentTimer >= timer ||
      currentTimer === undefined
    ) {
      callbackfun(arguments);
    }
  };
};

const callBack1 = (arg) => {
  console.log("Hey", arg);
};

const throttleIt1 = throttle(1000, callBack1);
throttleIt("1");
throttleIt("2");
throttleIt("3");
setTimeout(() => {
  throttleIt("4");
}, 1200);