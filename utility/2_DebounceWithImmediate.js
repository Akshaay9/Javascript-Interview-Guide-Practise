const debounce = (func, wait, immediate) => {
    let timeout;
    return function () {
      let args = arguments;
      const isImmediateEnabled = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!immediate) {
          func(arguments);
        }
      }, wait);
      if (isImmediateEnabled) {
        func(args);
      }
    };
  };
  const sayHello = (arg) => {
    console.log("Hey", arg);
  };
  
  const debounceIt = debounce(sayHello, 1000, false);
  
  debounceIt("a");
  debounceIt("b");
  debounceIt("c");
  debounceIt("d");
  debounceIt("e");
  