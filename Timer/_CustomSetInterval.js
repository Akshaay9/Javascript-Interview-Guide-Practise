function setIntervalPolyfillHandler() {
    let timerId = 0;
    const map = {};
  
    const setInterValPolyfill = (cb, timer) => {
      timerId += 1;
  
      const recurse = () => {
        map[timerId] = setTimeout(() => {
          cb();
          if (map[timerId]) {
            recurse();
          }
        }, timer);
      };
      recurse();
  
      return timerId;
    };
    const clearIntervalPolyfill = (id) => {
      clearTimeout(id);
      delete map[id];
    };
  
    return { setInterValPolyfill, clearIntervalPolyfill };
  }
  
  const { setInterValPolyfill, clearIntervalPolyfill } =
    setIntervalPolyfillHandler();
  
  const id = setInterValPolyfill(() => {
    console.log("Hey come on");
  }, 1000);
  
  setTimeout(() => {
    clearIntervalPolyfill(id);
  }, 5000);
  