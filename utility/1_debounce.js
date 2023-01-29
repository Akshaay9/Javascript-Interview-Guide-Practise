const debounce = (timer, fn) => {
    let timerID;
    return () => {
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        fn();
      }, timer);
    };
  };
  
  const sayHello = () => {
    console.log("Hey");
  };
  
  const debounceIt = debounce(1000, sayHello);
  
  debounceIt();
  debounceIt();
  debounceIt();
  debounceIt();
  debounceIt();
  