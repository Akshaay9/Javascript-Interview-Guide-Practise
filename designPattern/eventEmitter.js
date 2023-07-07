class EventEmitter {
    events = {};
    subscribe(event, cb) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(cb);
      return {
        unsubscribe: () => {
          this.events[event] = this.events[event].filter((ele) => ele !== cb);
        },
      };
    }
  
    emit(event, args = []) {
      const result = [];
      (this.events[event] || []).forEach((cb) => {
        result.push(cb(...args));
      });
      return result;
    }
  }
  
  const emitter = new EventEmitter();
  
  function onClickCallback() {
    return 99;
  }
  const sub = emitter.subscribe("onClick", onClickCallback);
  
  console.log(emitter.emit("onClick")); // [99]
  sub.unsubscribe(); // undefined
  console.log(emitter.emit("onClick")); // []
  