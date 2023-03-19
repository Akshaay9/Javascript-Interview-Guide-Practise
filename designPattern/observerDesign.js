function Move() {
    this.handlers = [];
  
    this.subscribe = function (cb) {
      this.handlers.push(cb);
    };
  
    this.unsubscribe = function (cb) {
      this.handlers = this.handlers.filter((ele) => ele !== cb);
    };
  
    this.fire = function (name) {
      this.handlers.forEach((ele) => {
        ele(name);
      });
    };
  }
  
  const moveHandler = function (item) {
    console.log("fired: " + item);
  };
  
  const moveHandler2 = function (item) {
    console.log("Moved: " + item);
  };
  
  const move = new Move();
  // subscribe 1st observer
  move.subscribe(moveHandler);
  move.subscribe(moveHandler2);
  move.unsubscribe(moveHandler2);
  move.fire("event #1");
  