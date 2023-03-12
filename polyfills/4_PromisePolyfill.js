const stattes = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2,
};

class MyPromise {
  constructor(callback) {
    this.state = stattes.PENDING;
    this.value = undefined;
    this.handlers = [];

    try {
      callback(this._resolve, this._reject);
    } catch (error) {
      callback(this.reject);
    }
  }
  _resolve = (value) => {
    this._updateHandler(stattes.FULFILLED, value);
  };
  _reject = (value) => {
    this._updateHandler(stattes.REJECTED, value);
  };

  _updateHandler = (state, value) => {
    if (this.state !== stattes.PENDING) {
      return;
    }
    setTimeout(() => {
      this.state = state;
      this.value = value;
      this._executeHandler();
    }, 0);
  };

  _executeHandler = () => {
    if (this.state === stattes.PENDING) {
      return;
    }

    this.handlers.forEach((handler) => {
      if (this.state === stattes.FULFILLED && handler && handler.onSuccess) {
        handler.onSuccess(this.value);
      } else if (
        this.state === stattes.REJECTED &&
        handler &&
        handler.onFailure
      ) {
        handler.onFailure(this.value);
      }
    });
    this.handlers = [];
  };

  _addHandler = (handler) => {
    this.handlers.push(handler);
    this._executeHandler();
  };

  then = (onSuccess, errCallBack) => {
    return new MyPromise((res, rej) => {
      this._addHandler({
        onSuccess: (val) => {
          if (!onSuccess) {
            return res(val);
          }
          try {
            return res(onSuccess(val));
          } catch (error) {
            rej(error);
          }
        },
        onFailure: (err) => {
          if (!errCallBack) {
            rej(err);
          }
          try {
            return rej(errCallBack(err));
          } catch (error) {
            rej(err);
          }
        },
      });
    });
  };
  catch = (errCallBack) => {
    return new MyPromise((_, rej) => {
      this._addHandler({
        onFailure: (err) => {
          if (!errCallBack) {
            rej(err);
          }
          try {
            return rej(errCallBack(err));
          } catch (error) {
            rej(err);
          }
        },
      });
    });
  };
  finally = (cb) => {
    let val;
    let wasRejected;
    return new MyPromise(
      ((value) => {
        val = value;
        wasRejected = false;
        return cb();
      },
      (err) => {
        val = err;
        wasRejected = true;
        return cb();
      })
    ).then((res, rej) => {
      if (!wasRejected) {
        return res(val);
      }
      return rej(val);
    });
  };
}

const prom = new MyPromise((res, rej) => {
  setTimeout(() => {
    res("Hey");
  }, 1000);
});

prom
  .then((ele) => {
    console.log("ele", ele);
  })
  .catch((err) => {
    console.log("err", err);
  })
  .finally(() => {
    console.log("finally");
  });
