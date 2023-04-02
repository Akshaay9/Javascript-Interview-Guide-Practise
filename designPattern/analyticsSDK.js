function SDK() {
    this.count = 1;
    this.stack = [];
  
    this.await = async function () {
      return new Promise((res, rej) => {
        setTimeout(() => {
          if (this.count % 5 === 0) {
            rej();
          } else {
            res();
          }
        }, 1000);
      });
    };
  
    this.logEvent = function (event) {
      this.stack.push(event);
    };
  
    this.startEvent = async function () {
      if (this.stack.length === 0) {
        return;
      }
      const firstEle = this.stack.shift();
  
      try {
        await this.await();
        this.count += 1;
        console.log("Analytics event send", firstEle);
      } catch (error) {
        console.log("Failed to send", firstEle);
        console.log("Retrying sending", firstEle);
        this.stack.unshift(firstEle);
        this.count += 1;
      } finally {
        this.startEvent();
      }
    };
  
    this.send = function () {
      this.startEvent();
    };
  }
  
  const sdk = new SDK();
  sdk.logEvent("event 1");
  sdk.logEvent("event 2");
  sdk.logEvent("event 3");
  sdk.logEvent("event 4");
  sdk.logEvent("event 5");
  sdk.logEvent("event 6");
  sdk.logEvent("event 7");
  sdk.logEvent("event 8");
  sdk.logEvent("event 9");
  sdk.logEvent("event 10");
  
  sdk.send();
  
//   Analytics event send event 1
//   Analytics event send event 2
//   Analytics event send event 3
//   Analytics event send event 4
//   Failed to send event 5
//   Retrying sending event 5
//   Analytics event send event 5
//   Analytics event send event 6
//   Analytics event send event 7
//   Analytics event send event 8
//   Failed to send event 9
//   Retrying sending event 9
//   Analytics event send event 9
//   Analytics event send event 10
  