function message() {
    console.log("hello");
  }
  
  const sampler = (fun, timesToBeExecuted) => {
    let count = 0;
    return () => {
      count += 1;
      if (count % timesToBeExecuted === 0) {
        fun();
      }
    };
  };
  
  const sample = sampler(message, 4);
  sample();
  sample();
  sample();
  sample(); // "Hello"
  sample();
  sample();
  sample();
  sample(); // Hello
  
  