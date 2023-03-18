const pipe = (...fns) => {
    return (args) => {
      let ans = args;
      for (let fn of fns) {
        ans = fn(ans);
      }
      console.log(ans);
    };
  };
  
  const getName = (person) => person.name;
  const uppercase = (string) => string.toUpperCase();
  const get6Characters = (string) => string.substring(0, 6);
  const reverse = (string) => string.split("").reverse().join("");
  
  pipe(getName, uppercase, get6Characters, reverse)({ name: "Buckethead" });
  
  // TEKCUB
  