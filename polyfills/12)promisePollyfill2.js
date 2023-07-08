class MyPromise {
    constructor(executor) {
      this._state = "pending";
      this._callbacks = [];
      this._result = undefined;
  
      try {
        executor(this._resolve.bind(this), this._reject.bind(this));
      } catch (error) {
        this._reject(error);
      }
    }
  
    _resolve(value) {
      if (this._state !== "pending") return;
      this._result = value;
      this._state = "fulfilled";
      this._handleSettled("onFulfilled");
    }
  
    _reject(error) {
      if (this._state !== "pending") return;
      this._result = error;
      this._state = "rejected";
      this._handleSettled("onRejected");
    }
  
    _handleSettled(onSettled) {
      queueMicrotask(() => {
        for (const cb of this._callbacks) {
          console.log(cb);
          try {
            const result = cb[onSettled](this._result);
            cb.resolve(result);
          } catch (err) {
            cb.reject(err);
          }
        }
      });
    }
  
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        this._callbacks.push({
          onFulfilled: onFulfilled ?? ((value) => value),
          onRejected:
            onRejected ??
            ((err) => {
              throw err;
            }),
          resolve,
          reject,
        });
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    finally(onFinally) {
      return this.then(onFinally, onFinally);
    }
  }
  
  const p1 = new MyPromise((res, rej) => {
    res("All cool");
  })
    .then((e) => {
      console.log("then callback----------> ", e);
    })
    .finally(() => {
      console.log("finally---------->");
    });
  