const toggleFun = (...args) => {
    const argLen = args.length;
    let count = 0;
    return () => {
      console.log(args[count % argLen]);
      count += 1;
    };
  };
  
  const toggle = toggleFun("Hello");
  toggle(); // Hello
  toggle(); //Hello
  toggle(); // Hello
  
  const toggle2 = toggleFun("Hello", "Hi");
  toggle2(); // Hello
  toggle2(); //Hi
  toggle2(); // Hello
  toggle2(); // Hi


  //   OR

  const toggleFun = (...args) => {
    let count = -1;
  
    return () => {
      count = (count + 1) % args.length;
      console.log(args[count]);
    };
  };
  
  const toggle = toggleFun("Hello");
  toggle(); // Hello
  toggle(); //Hello
  toggle(); // Hello
  
  const toggle2 = toggleFun("Hello", "Hi");
  toggle2(); // Hello
  toggle2(); //Hi
  toggle2(); // Hello
  toggle2(); // Hi
  