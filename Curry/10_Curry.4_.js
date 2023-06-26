const sum = (...args) => {
    if (args.length >= 2) {
      return args[0] + args[1];
    } else {
      return (y) => {
        return args[0] + y;
      };
    }
  };
  
  console.log(sum(2, 3)); // Outputs 5
  console.log(sum(2)(3)); // Outputs 5
  