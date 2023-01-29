const debounce = (timer, fn) => {
  let timerID;
  return (args) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      fn(args);
    }, timer);
  };
};

const sayHello = (name) => {
  console.log("Hey", name);
};

const debounceIt = debounce(1000, sayHello);

debounceIt("a");
debounceIt("b");
debounceIt("c");
debounceIt("d");
debounceIt("e");
