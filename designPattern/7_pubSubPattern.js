function PubSubPattern() {
    this.handlers = [];
  
    this.subscripbe = function (fun) {
      this.handlers.push(fun);
    };
  
    this.unsubscribe = function (fun) {
      this.handlers = this.handlers.filter((ele) => ele !== fun);
    };
  
    this.fire = function (val) {
      this.handlers.forEach((ele) => {
        ele(val);
      });
    };
  }
  
  const handlerOne = function (val) {
    console.log("FIred handler one" + val);
  };
  
  const handlerTwo = function (val) {
    console.log("fired handler two" + val);
  };
  
  const pubit = new PubSubPattern();
  
  pubit.subscripbe(handlerOne);
  pubit.subscripbe(handlerTwo);
  pubit.unsubscribe(handlerTwo);
  pubit.fire("yess");
  