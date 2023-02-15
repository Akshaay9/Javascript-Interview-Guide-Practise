const MY_TIMER = {
    timerId: 1,
    queue: [],
    setTimeOut: function (cb, timer, ...args) {
      const id = this.timerId++;
      this.queue.push({
        id,
        time: Date.now() + timer,
        cb,
        args,
      });
      this.queue = this.queue.sort((a, b) => a.time - b.time);
      return this.timerId;
    },
    clearTimeOut: function (removeId) {
      this.queue = this.queue.filter(({ id }) => id !== removeId);
    },
    runTimer: function () {
      while (true) {
        const entry = this.queue.shift();
        const { time, cb, args } = entry;
    
        if (Date.now() > time) {
          cb(...args);
        } else {
          this.queue.unshift(entry);
        }
        if (this.queue.length === 0) {
          break;
        }
      }
    },
  };
  
  MY_TIMER.setTimeOut(() => {
    console.log(1);
  }, 200);
  MY_TIMER.setTimeOut(() => {
    console.log(2);
  }, 250);
  MY_TIMER.runTimer();
  