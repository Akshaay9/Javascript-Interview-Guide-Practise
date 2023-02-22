Array.prototype.listeners = {};

Array.prototype.addListener = function (name, callback) {
  if (!this.listeners[name]) {
    this.listeners[name] = [];
  }

  this.listeners[name].push(callback);
};

Array.prototype.pushWithEvent = function (name, arrays) {
  this.push(...arrays);
  this.listenEvent(name, arrays);
};

Array.prototype.listenEvent = function (name, elem) {
  this.listeners[name].forEach((ele) => {
    ele(name, elem);
  });
};

const arr = [];

arr.addListener("add", (eventName, items, array) => {
  console.log("items were added", eventName, items);
});

arr.pushWithEvent("add", [4]);
