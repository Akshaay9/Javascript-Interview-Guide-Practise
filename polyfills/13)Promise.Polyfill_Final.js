class myPromise {
    constructor(callBack) {
      this.value = undefined;
      this.state = "PENDING";
      this.onSuccessBinded = this.onSuccess.bind(this);
      this.onErrorBinded = this.onError.bind(this);
      this.SuccessCB = [];
      this.catchCB = [];
  
      // step 1
      try {
        callBack(this.onSuccessBinded, this.onErrorBinded);
      } catch (error) {
        callBack(this.onErrorBinded);
      }
    }
    // step 2
    onSuccess(value) {
      queueMicrotask(() => {
        if (this.state !== "PENDING") return;
        this.value = value;
        this.state = "FULLFILLED";
        this.runnCallbacks();
      });
    }
  
    onError(value) {
      queueMicrotask(() => {
        if (this.state !== "PENDING") return;
        this.value = value;
        this.state = "REJECTED";
        this.runnCallbacks();
      });
    }
  
    // step3
    runnCallbacks() {
      if (this.state === "FULLFILLED") {
        this.SuccessCB.forEach((ele) => ele(this.value));
        this.SuccessCB = [];
      }
      if (this.state === "REJECTED") {
        this.catchCB.forEach((ele) => ele(this.value));
        this.catchCB = [];
      }
    }
  
    // step 4
    then(thenCB, catchCallback) {
      return new myPromise((res, rej) => {
        this.SuccessCB.push((result) => {
          if (!thenCB) {
            res(result);
          }
          try {
            res(thenCB(result));
          } catch (error) {
            rej(error);
          }
        });
        this.catchCB.push((result) => {
          if (!catchCallback) {
            rej(result);
          }
          try {
            res(catchCallback(result));
          } catch (error) {
            rej(error);
          }
        });
        this.runnCallbacks();
      });
    }
  
    //   step 5
    catch(catchCB) {
      return this.then(undefined, catchCB);
    }
  }
  
  const prom = new myPromise((res, rej) => {
    setTimeout(() => {
      rej("2");
    }, 2000);
  });
  
  prom
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log("err", err);
    });
  