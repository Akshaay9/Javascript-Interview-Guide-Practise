class SubscribeTe {
    constructor() {
      this.subscriptions = [];
    }
    subscribe(method) {
      this.subscriptions.push(method);
    }
  
    push(val) {
      this.subscriptions.forEach((ele) => {
        ele(val);
      });
    }
  }
  
  const z = new SubscribeTe();
  
  z.subscribe((value) => console.log(value));
  z.subscribe((value) => console.log(value * 2));
  z.subscribe((value) => console.log(value * 3));
  z.push(2);